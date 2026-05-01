import fs from 'node:fs';
import path from 'node:path';
import { compilersRepos, otherRepos } from './src/data/repos.ts';

const REPO_DIR = 'public/assets/images/repos';

async function downloadImages() {
  if (!fs.existsSync(REPO_DIR)) {
    fs.mkdirSync(REPO_DIR, { recursive: true });
  }

  const allRepos = [...compilersRepos, ...otherRepos];

  for (const repo of allRepos) {
    const [username, repoName] = repo.id.split('/');
    const url = `https://github-readme-stats.shion.dev/api/pin/?username=${username}&repo=${repoName}&theme=transparent&langs_count=10`;
    const fileName = `${username}-${repoName}.svg`;
    const filePath = path.join(REPO_DIR, fileName);

    console.log(`Downloading ${url} -> ${filePath}`);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(filePath, buffer);
    } catch (error) {
      console.error(`Failed to download ${repo.id}:`, error);
    }
  }
}

downloadImages();
