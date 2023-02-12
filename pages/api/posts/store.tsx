import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
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

  response.status(201).json({
    message: 'Post created',
  });
}
