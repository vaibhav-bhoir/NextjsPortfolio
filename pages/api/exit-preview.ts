import { NextApiResponse } from 'next';

export default function handler(_: any, res: NextApiResponse) {
  res.clearPreviewData();
  res.writeHead(307, { Location: '/' });
  res.end();
}
