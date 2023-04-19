import {
  Card,
  Title,
  Text,
  Grid,
  Container,
  Button,
  Badge,
  clsx,
} from "@mantine/core"
import { json, LinksFunction, LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { useContext, useMemo, useState } from "react"
import { initDirectusCms } from "~/models/directus/directus.server"
import { GetProductQuery } from "~/models/directus/sdk"
import { cache } from "~/utils/db.server"
import { CrossFade } from "react-crossfade-simple"
import styles from "~/styles/productStyles.css"
import { CartContext } from "~/context/cart"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
}

type LoaderData = {
  product: GetProductQuery
}

const productDefault = { products: [] }

export const loader: LoaderFunction = async ({ params, request }) => {
  let product: GetProductQuery
  if (cache.has(`product-${params.id}`)) {
    product = (await cache.get(`product-${params.id}`)) ?? productDefault
  } else {
    const directus = initDirectusCms()
    product = await directus.getProduct({
      filter: {
        status: { _eq: "published" },
        id: { _eq: params.id },
      },
      language: "en-US",
    })
    cache.set(`product-${params.id}`, product, 60 * 5) // cache product for 5 minutes
  }

  return json<LoaderData>({
    product: product,
  })
}

export default function Products() {
  const { product } = useLoaderData<LoaderData>()
  const { cart, addToCart } = useContext(CartContext)
  const [hover, setHover] = useState<string>("watermarked")
  const memoProductData = useMemo(() => {
    if (product) {
      const memoProducts = product
      return memoProducts
    }
  }, [product])

  console.log(product)

  return (
    <div>
      <Container size={1280}>
        <Title align="center" order={2} mb={24}>
          {product?.products![0]?.translations![0]?.name}
        </Title>
        <Grid>
          <Grid.Col md={9} sm={12}>
            <Grid>
              <Grid.Col md={3} sm={12} orderMd={1} orderSm={2}>
                {Object.keys(memoProductData?.products![0]?.images![0])
                  .reverse()
                  .map((imageKey, index) => {
                    return (
                      <Card
                        key={imageKey}
                        style={{
                          margin: "0 auto 16px",
                          width: "132px",
                          alignContent: "center",
                          justifyContent: "center",
                          display: "flex",
                          border:
                            hover === imageKey
                              ? "1px solid var(--mantine-color-gray-7)"
                              : "none",
                        }}
                        mb={16}
                        onClick={() => setHover(imageKey)}
                      >
                        <img
                          className="image-tiles"
                          style={{
                            transition: "all .5s ease",
                            maxWidth: "100px",
                            borderRadius: "6px",
                            alignSelf: "center",
                            justifySelf: "center",
                            margin: "0 auto",
                            opacity: hover === imageKey ? "1" : ".6",
                          }}
                          src={`/productimages/${
                            memoProductData?.products![0]?.images![0]?.[
                              imageKey
                            ]
                          }`}
                        />
                      </Card>
                    )
                  })}
              </Grid.Col>

              <Grid.Col
                md={9}
                sm={12}
                style={{ maxHeight: "500px" }}
                orderMd={2}
                orderSm={1}
              >
                <CrossFade contentKey={hover}>
                  <img
                    style={{ maxHeight: "500px", borderRadius: "8px" }}
                    key={hover}
                    className="image-tiles"
                    src={`/productimages/${
                      memoProductData?.products![0]?.images![0]?.[hover]
                    }`}
                  />
                </CrossFade>
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col md={3} sm={12}>
            <Text component="p" style={{ fontWeight: "bold" }} size={20} mt={0}>
              {`$ ${memoProductData?.products![0]?.price}`}
            </Text>
            <Text component="p">Short description goes here</Text>
            <Text component="p">
              Suggested frame sizes: <br />
              <ul>
                <li>5" x 7"</li>
                <li>8" x 10"</li>
                <li>11" x 14"</li>
                <li>16" x 20"</li>
                <li>20" x 30"</li>
                <li>22" x 32"</li>
              </ul>
            </Text>
            <Button
              className={clsx(
                cart.some(
                  (item) => item?.id === memoProductData?.products![0]?.id
                ) && "inCart",
                "addToCart"
              )}
              fullWidth
              disabled={cart.some(
                (item) => item?.id === memoProductData?.products![0]?.id
              )}
              variant="outline"
              mt={24}
              onClick={() => {
                if (memoProductData?.products![0]?.id) {
                  addToCart(memoProductData?.products![0]?.id, 1)
                } else {
                  return
                }
              }}
            >
              {cart.some(
                (item) => item?.id === memoProductData?.products![0]?.id
              )
                ? "In Cart"
                : "Add to cart"}
            </Button>
            <Button variant="filled" fullWidth mt={24} mb={24}>
              Buy now
            </Button>
            <Text component="p">
              * This is to buy a piece of digital art, suitable for printing out
              and framing. Upon purchasing you will receive a link to be able to
              download the digital files immediately.
            </Text>
          </Grid.Col>
        </Grid>
        {product?.products![0]?.categories![0]?.categories_id?.category && (
          <>
            <Title order={4} mb={16} mt={48}>
              Categories:
            </Title>
            {product?.products![0]?.categories![0]?.categories_id?.category.map(
              (category) => {
                return <Badge mr={16}>{category}</Badge>
              }
            )}
          </>
        )}
        <Text component="p">
          {"Long Description here -- " +
            product?.products![0]?.translations![0]?.description}
        </Text>
      </Container>
    </div>
  )
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <div className="error-container">
      <dialog color="red" title="Index Error">
        {error.message}
      </dialog>
    </div>
  )
}
