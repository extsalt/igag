import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import redis from '@/lib/redis';

/**
 * Get all post
 *
 * @param _request
 * @param response
 */
export default async function handler(
  _request: NextApiRequest,
  response: NextApiResponse
) {
  // let posts = await redis.get('posts');
  // if (posts) {
  //   return response.json(JSON.parse(posts));
  // }

  const posts = await prisma.posts.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  // await redis.set('posts', JSON.stringify(posts));
  response.json(JSON.parse(JSON.stringify(posts)));
}
