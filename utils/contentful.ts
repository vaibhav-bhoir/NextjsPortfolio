import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
});

export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  host: process.env.CONTENTFUL_PREVIEW_HOST,
});

export function getClient(usePreview = false) {
  return usePreview ? previewClient : client;
}

export async function getPageBySlug(slug: string, clientInstance = client) {
  const entries = await clientInstance.getEntries({
    content_type: 'pageDefault',
    'fields.slug': slug,
    include: 10,
  });

  return entries.items[0]; // assume 1 page per slug
}

export async function getGlobalSettings(clientInstance = client) {
  const entries = await clientInstance.getEntries({
    content_type: 'globalSiteSettings',
    limit: 1,
    include: 3, // 3 levels of nested content
  });

  return entries.items[0];
}
