// pages/api/preview.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug, secret } = req.query;

  // Validate the slug
  if (!slug || Array.isArray(slug) || slug.length === 0) {
    return res.status(400).json({ message: 'Invalid slug' });
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Set preview mode cookies
  res.setPreviewData({});

  // Redirect to the page with preview flag
  const redirectUrl = `/${slug}`;
  res.writeHead(307, { Location: redirectUrl });
  res.end();
}
