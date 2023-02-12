import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
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
  const posts = await prisma.posts.findMany();
  response.json(posts);
}
