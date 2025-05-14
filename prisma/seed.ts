import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.product.deleteMany() // Optional: clears old data before seeding

  await prisma.product.createMany({
    data: [
      {
        name: "Wireless Headphones",
        price: 99.99,
        description: "High-quality wireless headphones with noise cancellation and 30h battery life.",
        image: "https://pccircle.com/wp-content/uploads/2024/02/New-Project-4-3.jpg.webp"
      },
      {
        name: "Gaming Mouse",
        price: 49.99,
        description: "RGB gaming mouse with 12,000 DPI and customizable buttons.",
        image: "https://assets.umart.com.au/newsite/images/202410/source_img/Mouse-Mouse-Pads-Redragon-M811-Aatrox-MMO-Gaming-Mouse-15-Programmable-Buttons-Wired-RGB-Gamer-Mouse-w-Ergonomic-Natural-Grip-Build-19.webp"
      },
      {
        name: "Mechanical Keyboard",
        price: 79.99,
        description: "Backlit mechanical keyboard with tactile switches for fast typing and gaming.",
        image: "https://plugable.com/cdn/shop/products/main_ori_c6076e0d-1c17-4201-b467-c505d87f001e.jpg?pad_color=fff&v=1645555907&width=576"
      },
      {
        name: "4K Monitor",
        price: 299.99,
        description: "Ultra HD 27-inch monitor with HDR support and ultra-thin bezels.",
        image: "https://citycenter.jo/image/catalog/002023/122023/pic21212024.jpg"
      },
      {
        name: "Laptop Stand",
        price: 29.99,
        description: "Adjustable aluminum laptop stand with ergonomic tilt and heat dissipation.",
        image: "https://s3-eu-west-1.amazonaws.com/backcslimages/newsite/product-images/1000-1000/FoldineX-Laptop-Stand.jpg"
      },
      {
        name: "USB-C Hub",
        price: 39.99,
        description: "Multi-port USB-C hub with HDMI, USB-A, and Ethernet ports.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_YX8eE44h6yJEeK-bLfsecmSF3C2NCzKXA&s"
      },
      {
        name: "Portable SSD",
        price: 89.99,
        description: "Fast and compact external SSD with 1TB storage capacity.",
        image: "https://www.videoexpert.eu/f/pics/recording-media/wise-256gb-portable-ssd-hard-drive_1_o.jpg"
      },
      {
        name: "Smartwatch",
        price: 199.99,
        description: "Fitness tracking smartwatch with heart rate monitor and GPS.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNa_bPKWXbJmrgc_RhwtgaeC3Bk6qi0AN-w&s"
      }
    ]
  })

  console.log("✅ Seeded with products and images!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
