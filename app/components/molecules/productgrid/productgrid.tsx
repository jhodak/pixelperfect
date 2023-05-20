import {
  Text,
  Card,
  Title,
  Button,
  Grid,
  Pagination,
  clsx,
  Group,
} from '@mantine/core'
import { Link } from '@remix-run/react'
import { useContext, useEffect, useState } from 'react'
import styles from './styles.css'
import { CartContext } from '~/context/cart'
import { GetLatestProductsQuery } from '~/models/directus/sdk'

/* c8 ignore start */
export const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}
/* c8 ignore end */

interface productGridTypes {
  productsData: GetLatestProductsQuery
  title: string
}

export default function ProductGrid({ productsData, title }: productGridTypes) {
  const [hover, setHover] = useState<number>(-1)
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(8)
  const { cart, addToCart } = useContext(CartContext)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  return (
    <section className="product-grid">
      <Title align="center" mb={24} mt={48} order={2}>
        {title}
      </Title>
      <Pagination.Root
        aria-label="product pagination controls"
        boundaries={1}
        total={Math.ceil(productsData?.products?.length / limit)}
        onChange={(page) => setPage(page)}
      >
        <Group align="center" mb={24} mt={24} position="center" spacing={5}>
          <Pagination.Previous aria-label="previous product page" />
          <Pagination.Items />
          <Pagination.Next aria-label="next product page" />
        </Group>
      </Pagination.Root>
      <Grid>
        {productsData?.products?.map((product, index) => {
          if (index + 1 <= page * limit && index + 1 > (page - 1) * limit) {
            return (
              <Grid.Col
                key={`${index}-${product?.translations![0]?.name}`}
                xs={12}
                sm={6}
                md={3}
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
                        } pictured framed on a white wall.`}
                        className="bottom"
                        src={`/productimages/${product.images[0].mockup}`}
                      />
                      <img
                        alt={`watermarked version of ${
                          product?.translations![0]?.name
                        }`}
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
                    mt={24}
                    variant="filled"
                    onClick={() => {
                      if (product.id) {
                        addToCart(product.id, 1)
                      } else {
                        return
                      }
                    }}
                  >
                    {cart.some((item) => item?.id === product.id)
                      ? 'In Cart'
                      : 'Add to cart'}
                  </Button>
                </Card>
              </Grid.Col>
            )
          }
        })}
      </Grid>
      {/* <Pagination
        align="center"
        boundaries={1}
        mt={48}
        position="center"
        total={Math.ceil(productsData?.products?.length / limit)}
        onChange={(page) => setPage(page)}
        aria-label="product pagination controls"
      /> */}

      <Pagination.Root
        aria-label="product pagination controls"
        boundaries={1}
        total={Math.ceil(productsData?.products?.length / limit)}
        onChange={(page) => setPage(page)}
      >
        <Group align="center" mt={48} position="center" spacing={5}>
          <Pagination.Previous aria-label="previous product page" />
          <Pagination.Items />
          <Pagination.Next aria-label="next product page" />
        </Group>
      </Pagination.Root>
    </section>
  )
}
