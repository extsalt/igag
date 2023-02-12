import { NextApiRequest, NextApiResponse } from 'next';
const cloudinary = require('cloudinary').v2;
export default function handle(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
    },
    'e7pnFSkZGBydMTGjU9xpicqYn9Q'
  );

  response.json({
    signature: signature,
    timestamp: timestamp,
    key: '417548972434439',
  });
}
