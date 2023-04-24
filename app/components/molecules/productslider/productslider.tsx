import { Carousel } from '@mantine/carousel'
import { Text, Card, Title, Button, clsx } from '@mantine/core'
// import Autoplay from "embla-carousel-autoplay"
import { useMediaQuery } from '@mantine/hooks'
import { Link } from '@remix-run/react'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { useContext, useState } from 'react'
import styles from './styles.css'
import { CartContext } from '~/context/cart'
import { GetLatestProductsQuery } from '~/models/directus/sdk'

/* c8 ignore start */
export const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}
/* c8 ignore end */

interface productSliderTypes {
  productsData: GetLatestProductsQuery
  title: string
}

export default function ProductSlider({
  productsData,
  title,
}: productSliderTypes) {
  const [hover, setHover] = useState<number>(-1)
  const isTablet = useMediaQuery('(max-width: 769px)', false, {
    getInitialValueInEffect: false,
  })
  const { cart, addToCart } = useContext(CartContext)
  // const autoplay = useRef(Autoplay({ delay: 8000 }))

  return (
    <section className="product-slider">
      <Title align="center" id="" mb={24} mt={48} order={2}>
        {title}
      </Title>
      <Carousel
        loop
        withIndicators
        align="start"
        aria-label="carousel"
        // plugins={isTablet ? [] : [autoplay.current]}
        // onMouseEnter={autoplay.current.stop}
        // onMouseLeave={autoplay.current.reset}
        mb={42}
        nextControlIcon={
          <IconArrowRight aria-label="next set of products" size={16} />
        }
        previousControlIcon={
          <IconArrowLeft aria-label="previous set of products" size={16} />
        }
        role="group"
        slideGap="xl"
        slideSize="300px"
        slidesToScroll={isTablet ? 'auto' : 3}
        speed={10}
      >
        {productsData?.products?.map((product, index) => {
          return (
            <Carousel.Slide
              key={`${index}-${product?.translations![0]?.name}`}
              aria-label="product slide"
            >
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
                  <Title align="center" mb={16} order={3}>
                    {product?.translations![0]?.name ?? 'Product Name'}
                  </Title>

                  <div className="crossFade">
                    <img
                      alt={`${
                        product?.translations![0]?.name
                      } - showing framed version on a white wall`}
                      className="bottom"
                      src={`/productimages/${product.images[0].mockup}`}
                    />
                    <img
                      alt={`${
                        product?.translations![0]?.name
                      } - watermarked version`}
                      className="top"
                      src={`/productimages/${product.images[0].watermarked}`}
                      style={{
                        opacity: `${hover === index ? '0' : '1'}`,
                      }}
                    />
                  </div>
                  <Text align="center" mt={16}>{`$ ${product.price}`}</Text>
                </Link>
                <Button
                  fullWidth
                  className={clsx(
                    cart.some((item) => item?.id === product.id) && 'inCart',
                    'addToCart'
                  )}
                  disabled={cart.some((item) => item?.id === product.id)}
                  mt={16}
                  variant="filled"
                  onClick={() => addToCart(product.id, 1)}
                >
                  {cart.some((item) => item?.id === product.id)
                    ? 'In Cart'
                    : 'Add to cart'}
                </Button>
              </Card>
            </Carousel.Slide>
          )
        })}
      </Carousel>
    </section>
  )
}
