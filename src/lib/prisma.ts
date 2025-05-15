import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

// Only create one Prisma Client instance in dev
const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['error', 'warn'], // Optional: logs for debugging
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export { prisma };
