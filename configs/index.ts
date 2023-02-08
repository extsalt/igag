import { PrismaClient } from '@prisma/client';

const dev = process.env.NODE_ENV !== 'production';
export const server = dev ? 'http://localhost:3000' : 'https://igag.vercel.com';
export const prismaClient = new PrismaClient({
  log: ['query'],
});
