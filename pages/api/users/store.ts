import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

/**
 *Create user's account
 *
 * @param request NextApiRequest
 * @param response NextApiResponse
 */
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { username, email, password } = request.body;
  const user = await prisma.users.create({
    data: {
      username,
      email,
      password,
    },
  });

  response.status(201).json({
    user,
  });
}
