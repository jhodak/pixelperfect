import { Carousel } from "@mantine/carousel"
import { Text, Card, Title, Button, clsx } from "@mantine/core"
import { useContext, useRef, useState } from "react"
// import Autoplay from "embla-carousel-autoplay"
import { GetLatestProductsQuery } from "~/models/directus/sdk"

import styles from "./styles.css"
import { useMediaQuery } from "@mantine/hooks"
import { Link } from "@remix-run/react"
import { CartContext } from "~/context/cart"

export const links = () => {
  return [{ rel: "stylesheet", href: styles }]
}

interface productSliderTypes {
  productsData: GetLatestProductsQuery
  title: string
}

export default function ProductSlider({
  productsData,
  title,
}: productSliderTypes) {
  const [hover, setHover] = useState<number>(-1)
  const isTablet = useMediaQuery("(max-width: 769px)", false, {
    getInitialValueInEffect: false,
  })
  const { cart, addToCart } = useContext(CartContext)
  // const autoplay = useRef(Autoplay({ delay: 8000 }))

  return (
    <section className="product-slider">
      <Title order={2} mt={48} mb={24} align="center">
        {title}
      </Title>
      <Carousel
        slideSize="300px"
        slideGap="xl"
        align="start"
        slidesToScroll={isTablet ? "auto" : 3}
        loop
        // plugins={isTablet ? [] : [autoplay.current]}
        // onMouseEnter={autoplay.current.stop}
        // onMouseLeave={autoplay.current.reset}
        withIndicators
        speed={10}
        mb={42}
      >
        {productsData?.products?.map((product, index) => {
          return (
            <Carousel.Slide key={`${index}-${product?.translations![0]?.name}`}>
              <Card
                className="product-slider-card"
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(-1)}
              >
                <Link
                  className="product-link"
                  to={`/product/${product.id}/${
                    product?.translations![0]?.name
                  }`}
                >
                  <Title order={4} mb={16} align="center">
                    {product?.translations![0]?.name ?? "Product Name"}
                  </Title>

                  <div className="crossFade">
                    <img
                      className="bottom"
                      src={`/productimages/${product.images[0].mockup}`}
                    />
                    <img
                      className="top"
                      style={{
                        opacity: `${hover === index ? "0" : "1"}`,
                      }}
                      src={`/productimages/${product.images[0].watermarked}`}
                    />
                  </div>
                  <Text align="center" mt={16}>{`$ ${product.price}`}</Text>
                </Link>
                <Button
                  className={clsx(
                    cart.some((item) => item?.id === product.id) && "inCart",
                    "addToCart"
                  )}
                  fullWidth
                  disabled={cart.some((item) => item?.id === product.id)}
                  variant="filled"
                  mt={16}
                  onClick={() => addToCart(product.id, 1)}
                >
                  {cart.some((item) => item?.id === product.id)
                    ? "In Cart"
                    : "Add to cart"}
                </Button>
              </Card>
            </Carousel.Slide>
          )
        })}
      </Carousel>
    </section>
  )
}
