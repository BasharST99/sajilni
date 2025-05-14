import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Typography, Card, CardContent, CardMedia, CircularProgress, Container, Button } from '@mui/material'
import { useTranslations } from "next-intl"
import Link from 'next/link'
import { GetStaticPropsContext } from "next"

import en from '../../messages/en/en.json'
import ar from '../../messages/ar/ar.json'

type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string
}

export default function ProductDetails() {
  const router = useRouter()
  const { id } = router.query
  const t = useTranslations("Product")

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then(res => res.json())
        .then(data => {
          setProduct(data)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    )
  }

  if (!product) {
    return (
      <><div className="text-center mt-10 text-red-600">
        {t('notFound')}
      </div><div className="mt-6 text-center">
          <Link href={`/${router.locale}`} passHref>
            <Button
              variant="outlined"
              color="primary"
              className="mt-4"
            >
              {t('backHome')}

            </Button>
          </Link>
        </div></>
    )
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    )
  }

  if (!product || !product.price || !product.name) {
    return (
      <><div className="text-center mt-10 text-red-600">
        {t("notFound")}
      </div><div className="mt-6 text-center">
          <Link href={`/${router.locale}`} passHref>
            <Button
              variant="outlined"
              color="primary"
              className="mt-4"
            >
              {t('backHome')}

            </Button>
          </Link>
        </div></>
    )
  }

  return (
    <Container maxWidth="md" className="py-10">
      <Card className="shadow-md">
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.name}
          className="object-contain p-4"
        />
        <CardContent className="text-center">
          <Typography variant="h4" component="div" className="font-bold mb-2">
            {product.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" className="mb-4">
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body1" className="text-gray-800">
            {product.description}
          </Typography>
        </CardContent>
      </Card>

      <div className="mt-6 text-center">
        <Link href={`/${router.locale}`} passHref>
          <Button
            variant="outlined"
            color="primary"
            className="mt-4"
          >
            {t('backHome')}

          </Button>
        </Link>
      </div>
    </Container>
  )
}

export async function getServerSideProps({ locale }: GetStaticPropsContext) {

  return {
    props: {
      messages: locale === 'ar' ? ar : en
    }
  }
}