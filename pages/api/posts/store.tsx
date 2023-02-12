import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { imageUrl } from '@/lib/unsplash';
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
  const { title } = request.body;

  const prismaClient = new PrismaClient({
    log: ['query'],
  });
  const post = await prismaClient.posts.create({
    data: {
      title,
      slug: title,
      userId: 1,
      imageUrl,
    },
  });
  response.json({
    post,
  });
}
