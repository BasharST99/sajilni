import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

declare global {
  // Allow global var reuse in development
  var prisma: PrismaClient | undefined;
}

if (!global.prisma) {
  try {
    global.prisma = new PrismaClient();
    console.log("✅ Prisma Client connected.");
  } catch (error) {
    console.error("❌ Prisma Client failed to connect:", error);
  }
}

prisma = global.prisma;

export { prisma };
