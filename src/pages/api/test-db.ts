import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await prisma.product.findMany()
    res.status(200).json(products)
  } catch (error: any) {
    console.error("🔥 TEST-DB ERROR:", error)
    res.status(500).json({
      message: "Failed to fetch product",
      error: error.message,
      stack: error.stack
    })
  }
}
