import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
});

export async function getPageBySlug(slug: string) {
  console.log('🚀 ~ getPageBySlug ~ slug:', slug);

  const entries = await client.getEntries({
    content_type: 'pageDefault',
    'fields.slug': slug,
    include: 10,
  });

  return entries.items[0]; // assume 1 page per slug
}
