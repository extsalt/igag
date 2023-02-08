import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const randomEmail = require('random-email');
const crypto = require('crypto');

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const prisma = new PrismaClient({
      log: ['query'],
    },
  );
  const email: string = randomEmail();
  let username: string | undefined = email.split('@').at(0);
  if (!username) {
    username = email;
  }
  const password: string = crypto.randomUUID();
  await prisma.users.create({
    data: { username, email, password },
  });
  const users = await prisma.users.findMany();
  response.json(users);
}