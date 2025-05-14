import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { GetStaticPropsContext } from "next"
import { useTranslations } from "next-intl"

import en from '../messages/en/en.json'
import ar from '../messages/ar/ar.json'
type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string
}

export default function HomePage() {
  const t = useTranslations("Home")
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts)
  }, [])
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{t('title')}</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl mx-auto">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
export async function getServerSideProps({ locale }: GetStaticPropsContext) {

  return {
    props: {
      messages: locale === 'ar' ? ar : en
    }
  }
}