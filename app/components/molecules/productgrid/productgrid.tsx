import {
  Text,
  Card,
  Title,
  Button,
  Grid,
  Pagination,
  clsx,
} from "@mantine/core"
import { useContext, useState } from "react"
import { GetLatestProductsQuery } from "~/models/directus/sdk"
import styles from "./styles.css"
import { Link } from "@remix-run/react"
import { CartContext } from "~/context/cart"

export const links = () => {
  return [{ rel: "stylesheet", href: styles }]
}

interface productGridTypes {
  productsData: GetLatestProductsQuery
  title: string
}

export default function ProductGrid({ productsData, title }: productGridTypes) {
  const [hover, setHover] = useState<number>(-1)
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(8)
  const { cart, addToCart } = useContext(CartContext)

  return (
    <section className="product-grid">
      <Title order={2} mt={48} mb={24} align="center">
        {title}
      </Title>
      <Pagination
        boundaries={1}
        total={Math.ceil(productsData?.products?.length / limit)}
        onChange={(page) => setPage(page)}
        align="center"
        position="center"
        mb={24}
        mt={24}
      />
      <Grid>
        {productsData?.products?.map((product, index) => {
          if (index + 1 <= page * limit && index + 1 > (page - 1) * limit) {
            return (
              <Grid.Col
                span={3}
                key={`${index}-${product?.translations![0]?.name}`}
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
                    mt={24}
                    onClick={() => {
                      if (product.id) {
                        addToCart(product.id, 1)
                      } else {
                        return
                      }
                    }}
                  >
                    {cart.some((item) => item?.id === product.id)
                      ? "In Cart"
                      : "Add to cart"}
                  </Button>
                </Card>
              </Grid.Col>
            )
          }
        })}
      </Grid>
      <Pagination
        mt={48}
        boundaries={1}
        total={Math.ceil(productsData?.products?.length / limit)}
        onChange={(page) => setPage(page)}
        align="center"
        position="center"
      />
    </section>
  )
}
