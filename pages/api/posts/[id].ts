import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  postId: string | string [] | undefined
}

export default function handle(
  request: NextApiRequest,
  response: NextApiResponse<Data>,
): void {
  const { id } = request.query;

  response.json({ postId: id });
}
