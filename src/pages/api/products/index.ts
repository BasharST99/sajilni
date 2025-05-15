import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const products = await prisma.product.findMany()
    return res.status(200).json(products)
  } catch {
    return res.status(500).json({ message: 'Failed to fetch products' })
  }
}
