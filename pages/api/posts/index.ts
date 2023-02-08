import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string
}
export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
): void {
  response.status(200).json({ message: 'hello world' });
}
