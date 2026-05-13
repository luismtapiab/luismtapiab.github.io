import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.string().optional(),
			heroImageForList: z.string().optional(),
			heroImageFit: z.enum(['cover', 'contain']).optional(),
			heroImageAlt: z.string().optional(),
			lang: z.enum(['en', 'es']),
		}),
});

export const collections = { blog };
