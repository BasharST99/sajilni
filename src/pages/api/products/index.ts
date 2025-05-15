import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    console.error('❌ /api/products failed:', error); // ✅ Add this
    res.status(500).json({ message: 'Failed to fetch products' });
  }
}
