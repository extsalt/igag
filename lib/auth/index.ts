import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextApiRequest, NextApiResponse } from 'next';
import redis from '@/lib/redis';
import { prisma } from '@/lib/prisma';

export default async function auth(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions);

  if (!session) {
    return null;
  }

  const user = session.user;
  //find from cache, if not, update cache
  const cachedUserJson = await redis.get('user:email:' + user?.email);

  if (cachedUserJson) {
    return JSON.parse(cachedUserJson);
  }
  // could not find in cache, pull from db and put in cache
  const userFromDb = await prisma.users.findFirst({
    where: {
      // @ts-ignore
      email: user?.email,
    },
  });

  if (!userFromDb) {
    return null;
  }

  await redis.set('user:email:' + userFromDb.email, JSON.stringify(userFromDb));

  return userFromDb;
} 