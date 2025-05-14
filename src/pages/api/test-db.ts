import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await prisma.product.findMany()
    res.status(200).json(products)
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'DB connection failed';
    res.status(500).json({ error: errorMessage });
  }
}
