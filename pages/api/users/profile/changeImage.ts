import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { prisma } from '@/lib/prisma';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions);

  if (!session) {
    response.status(401).json({ message: 'You must be logged in.' });
    return;
  }

  const user = await prisma.users.findFirst({
    // @ts-ignore
    where: { email: session.user.email },
  });

  if (!user) {
    response.status(401).json({ message: 'You must be logged in.' });
    return;
  }

  const { image } = request.body;

  await prisma.users.update({
    where: { id: user.id },
    data: { image, updatedAt: new Date() },
  });

  response.json({
    message: 'Your profile picture has been updated.',
  });
}