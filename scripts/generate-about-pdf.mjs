import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';
import PDFDocument from 'pdfkit';
import { getCv } from '../src/data/cv.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const publicPdfDir = path.join(projectRoot, 'public', 'assets');
const distDir = path.join(projectRoot, 'dist', 'assets');
const pdfFileName = 'LuisTapia.pdf';
const watchedFiles = [
  path.join(projectRoot, 'scripts', 'generate-about-pdf.mjs'),
  path.join(projectRoot, 'src', 'data', 'cv.ts'),
];

async function pathExists(filePath) {
  try {
    await fsPromises.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function computeHash(strings) {
  return crypto.createHash('sha256').update(strings.join('\n'), 'utf8').digest('hex');
}

async function readMetadata(metadataPath) {
  if (!(await pathExists(metadataPath))) {
    return null;
  }

  try {
    const content = await fsPromises.readFile(metadataPath, 'utf8');
    return JSON.parse(content);
  } catch {
    return null;
  }
}

async function writeMetadata(metadataPath, metadata) {
  const content = JSON.stringify(metadata, null, 2);
  await fsPromises.writeFile(metadataPath, content, 'utf8');
  const distMetadataPath = path.join(distDir, path.basename(metadataPath));
  if (await pathExists(distDir)) {
    await fsPromises.writeFile(distMetadataPath, content, 'utf8');
  }
}

function addSectionTitle(doc, title) {
  doc.moveDown(0.5);
  doc.font('Helvetica-Bold').fontSize(14).fillColor('#000000').text(title);
  doc.moveDown(0.25);
  doc.font('Helvetica').fontSize(10).fillColor('#000000');
}

function drawList(doc, items) {
  for (const item of items) {
    doc.list(item, { bulletRadius: 2, textIndent: 12, bulletIndent: 12, lineGap: 2, bulletGap: 6 });
  }
}

function generatePdf(outputPath, pdfData) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'LEGAL', margins: { top: 36, bottom: 36, left: 40, right: 40 }, info: { Title: pdfData.name, Author: 'Luis Tapia' } });
    const writeStream = fs.createWriteStream(outputPath);

    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
    doc.on('error', reject);

    doc.pipe(writeStream);

    doc.fillColor('#000000');
    doc.font('Helvetica-Bold').fontSize(22).text(pdfData.name, { align: 'left' });
    doc.moveDown(0.15);
    if (pdfData.subtitle) {
      doc.font('Helvetica').fontSize(12).fillColor('#333333').text(pdfData.subtitle, { align: 'left' });
      doc.moveDown(0.2);
    }

    if (pdfData.summary) {
      doc.font('Helvetica').fontSize(10).fillColor('#000000').text(pdfData.summary, { align: 'left', lineGap: 3 });
      doc.moveDown(0.6);
    }
    

    doc.font('Helvetica').fontSize(10).text(
      `${pdfData.contact.location} · ${pdfData.contact.github} · ${pdfData.contact.phone} · ${pdfData.contact.email}`,
      { lineGap: 2 }
    );
    doc.moveDown(0.8);

    addSectionTitle(doc, 'Habilidades técnicas');
    doc.text(`Lenguajes: ${pdfData.skills.lang.join(', ')}`);
    doc.text(`Herramientas: ${pdfData.skills.tools.join(', ')}`);

    addSectionTitle(doc, 'Experiencia');
    for (const item of pdfData.experience) {
      doc.font('Helvetica-Bold').fontSize(11).text(`${item.title}${item.location ? ` — ${item.location}` : ''}`);
      doc.font('Helvetica').fontSize(10).text(item.duration);
      doc.moveDown(0.1);
      if (Array.isArray(item.responsibilities) && item.responsibilities.length) {
        drawList(doc, [item.responsibilities]);
        doc.moveDown(0.4);
      }
    }

    addSectionTitle(doc, 'Educación');
    for (const item of pdfData.education) {
      doc.font('Helvetica-Bold').fontSize(11).text(item.degree);
      doc.font('Helvetica').fontSize(10).text(`${item.institution} · ${item.location} · ${item.graduation_date}`);
      if (item.thesis) {
        doc.text(`Tesis: ${item.thesis}`);
      }
      if (Array.isArray(item.relevant_courses) && item.relevant_courses.length) {
        doc.text(`Cursos relevantes: ${item.relevant_courses.join(', ')}`);
      }
      doc.moveDown(0.4);
    }

    // Widths used by the courses section
    const fullWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
    const dateWidth = 30;
    const courseLabelWidth = fullWidth - dateWidth - 8;
    const columnGap = 24;

    if (Array.isArray(pdfData.courses) && pdfData.courses.length) {
      addSectionTitle(doc, 'Cursos y certificaciones');
      for (const course of pdfData.courses) {
        const courseLabel = `${course.title} — ${course.institution}`;
        doc.font('Helvetica').fontSize(10).text(courseLabel, {
          continued: true,
          width: courseLabelWidth,
          lineGap: 2,
        });
        doc.text(course.date, {
          width: dateWidth,
          align: 'right',
          lineGap: 2,
        });
        doc.moveDown(0.2);
      }
    }

    const sectionStartY = doc.y;

    // Column positions and widths (declare next to where they're used)
    const leftX = doc.page.margins.left;
    const rightX = leftX + (doc.page.width - doc.page.margins.left - doc.page.margins.right + columnGap) / 2;
    const columnWidth = (doc.page.width - doc.page.margins.left - doc.page.margins.right - columnGap) / 2;

    const leftY = sectionStartY;
    doc.x = leftX;
    doc.y = leftY;
    addSectionTitle(doc, 'Idiomas e intereses');
    doc.text(`Idiomas: ${pdfData.other.languages.join(', ')}`, { width: columnWidth, lineGap: 2 });
    doc.text(`Intereses: ${pdfData.other.interests.join(', ')}`, { width: columnWidth, lineGap: 2 });
    const leftBottom = doc.y;

    const rightY = leftY;
    doc.x = rightX;
    doc.y = rightY;
    addSectionTitle(doc, 'Logros');
    doc.font('Helvetica').fontSize(10);
    for (const achievement of pdfData.achievements) {
      doc.text(`• ${achievement}`, { width: columnWidth, lineGap: 2, paragraphGap: 1 });
    }
    const rightBottom = doc.y;

    doc.x = leftX;
    doc.y = Math.max(leftBottom, rightBottom) + 0.2;

    doc.end();
  });
}

async function main() {
  const fileContents = await Promise.all(watchedFiles.map((file) => fsPromises.readFile(file, 'utf8')));
  const currentHash = computeHash(fileContents);

  const langs = [
    { code: 'es', file: 'LuisTapia.pdf' },
    { code: 'en', file: 'LuisTapia_en.pdf' },
  ];

  // check metadata for first file (we'll regenerate both when hash differs)
  const metaPath = path.join(publicPdfDir, `${langs[0].file}.metadata.json`);
  const metadata = (await readMetadata(metaPath)) ?? { hash: null };

  const outputsMissing = await Promise.all(langs.map(async (l) => !(await pathExists(path.join(publicPdfDir, l.file))) || !(await pathExists(path.join(distDir, l.file)))));
  const shouldGenerate = metadata.hash !== currentHash || outputsMissing.some(Boolean);
  if (!shouldGenerate) {
    console.log('About page PDFs are already up to date.');
    return;
  }

  await fsPromises.mkdir(publicPdfDir, { recursive: true });
  await fsPromises.mkdir(distDir, { recursive: true });

  console.log('Generating static about-page PDFs with PDFKit...');

  for (const langEntry of langs) {
    const pdfData = getCv(langEntry.code);
    const outputFilePath = path.join(publicPdfDir, langEntry.file);
    const outputDistPath = path.join(distDir, langEntry.file);
    await generatePdf(outputFilePath, pdfData);
    await fsPromises.copyFile(outputFilePath, outputDistPath);
    const metadataPathForFile = path.join(publicPdfDir, `${langEntry.file}.metadata.json`);
    await writeMetadata(metadataPathForFile, { hash: currentHash, updatedAt: new Date().toISOString(), lang: langEntry.code });
    console.log(`Generated PDF saved to public/assets/${langEntry.file}`);
  }
}

main().catch((err) => {
  console.error('PDF generation failed:', err);
  process.exit(1);
});