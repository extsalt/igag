import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import redis from '@/lib/redis';

export default async function handler(
  _request: NextApiRequest,
  response: NextApiResponse,
) {

  let cachedPosts = await redis.get('posts');
  if (cachedPosts) {
    response.json(JSON.parse(cachedPosts));
    return;
  }

  const posts = await prisma.posts.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          image: true,
        },
      },
    },
  });

  const stringifyPosts = JSON.stringify(posts);

  await redis.set('posts', stringifyPosts);

  response.json(JSON.parse(stringifyPosts));
}
