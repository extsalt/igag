import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { username } = request.body;

  const session = await getServerSession(request, response, authOptions);

  console.log(session);

  response.status(201).json({
    session,
  });
}
