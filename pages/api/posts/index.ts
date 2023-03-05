import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(
  _request: NextApiRequest,
  response: NextApiResponse,
) {

  // let cachedPosts = await redis.get('posts');
  // if (cache) {
  //   response.json(JSON.parse(cachedPosts));
  //   return;
  // }

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

  // await redis.set('posts', JSON.stringify(posts));
  response.json(JSON.parse(JSON.stringify(posts)));
}
