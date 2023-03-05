import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const slug = require('slug');
/**
 * Store post
 *
 * @param request
 * @param response
 */
export default async function handle(
  request: NextApiRequest,
  response: NextApiResponse,
) {
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

  const { title, imageUrl } = request.body;

  const post = await prisma.posts.create({
    data: {
      title,
      slug: slug(title),
      // @ts-ignore
      userId: user.id,
      imageUrl,
    },
  });

  response.status(201).json({
    message: 'Post created',
  });
}
