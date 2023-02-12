import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
export default async function handler(
  _request: NextApiRequest,
  response: NextApiResponse
) {
  const users = await prisma.users.findMany();
  response.json(users);
}
