import Link from 'next/link'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import { useTranslations } from "next-intl"


type Props = {
  id: string
  name: string
  price: number
  image: string
}

export default function ProductCard({ id, name, price, image }: Props) {
  const t = useTranslations("Home")
  return (
    <Card className="h-full shadow-lg rounded-lg overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:scale-105 bg-white text-black">
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={name}
        className="object-contain p-4"
      />
      <CardContent className="text-center">
        <Typography variant="h6" className="font-bold text-lg text-center mt-2">
          {name}
        </Typography>
        <Typography variant="body2" className="text-center text-gray-600 mb-2">
          ${price.toFixed(2)}
        </Typography>
        <div className="text-center mt-auto">
          <Link href={`/product/${id}`} passHref>
            <Button
              variant="text"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded shadow-sm border"
            >
              {t('viewDetails')}
            </Button> 
          </Link>
        </div>
      </CardContent>
    </Card>

  )
}
