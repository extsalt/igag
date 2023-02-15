import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import redis from '@/lib/redis';

/**
 * Get all post
 *
 * @param request
 * @param response
 */
export default async function handler(
  _request: NextApiRequest,
  response: NextApiResponse
) {
  let posts = await redis.get('posts');
  if (posts) {
    return response.json(JSON.parse(posts));
  }

  posts = await prisma.posts.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  await redis.set('posts', posts);
  response.json(posts);
}
