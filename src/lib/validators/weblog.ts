import z from 'zod';

export const weblogMetadataSchema = z.object({
  title: z
    .string()
    .min(1, 'Article title is a required field')
    .min(4, 'Article title must be at least 4 characters long')
    .max(128, 'Article title must be at most 128 characters long'),
  lead: z
    .string()
    .min(8, 'Lead paragraph must be at least 8 characters long')
    .max(256, 'Lead paragraph must be at most 256 characters long'),
  publishedAt: z.date(),
  splashImage: z.string().url('Splash image must be a valid URL').optional(),
  thumbnailImage: z.string().url().optional(),
  keywords: z.string().min(1).max(8).array().optional(),
  language: z.string().default('en'),
});
