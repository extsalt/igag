import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Get all post
 *
 * @param request
 * @param response
 */
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const prismaClient = new PrismaClient({
    log: ['query'],
  });

  const posts = await prismaClient.posts.findMany();

  response.json(posts);
}
