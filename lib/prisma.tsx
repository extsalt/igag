import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient({
  log: ['query', 'info', 'error', 'warn'],
});

export default prisma;
