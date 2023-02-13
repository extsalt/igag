import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import redis from '@/lib/redis';
/**
 * Store post
 *
 * @param request
 * @param response
 */
export default async function handle(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { title, imageUrl } = request.body;

  const post = await prisma.posts.create({
    data: {
      title,
      slug: title,
      userId: 1,
      imageUrl,
    },
  });

  await redis.del('posts');
  response.status(201).json({
    message: 'Post created',
  });
}
