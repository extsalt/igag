import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { email, username, image, identityProvider } = request.body;

  const user = await prisma.users.create({
    data: {
      username,
      email,
      image,
      identityProvider,
    },
  });

  response.status(201).json({
    user,
  });
}