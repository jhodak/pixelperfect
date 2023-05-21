import {
  Card,
  Title,
  Text,
  Grid,
  Container,
  Button,
  Badge,
  clsx,
} from '@mantine/core'
import { json, LinksFunction, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useContext, useMemo, useState } from 'react'
import { CrossFade } from 'react-crossfade-simple'
import { CartContext } from '~/context/cart'
import { initDirectusCms } from '~/models/directus/directus.server'
import { GetProductQuery } from '~/models/directus/sdk'
import styles from '~/styles/productStyles.css'
import { cache } from '~/utils/db.server'
import { EnvContext } from '~/context/env'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
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
        status: { _eq: 'published' },
        id: { _eq: params.id },
      },
      language: 'en-US',
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
  const { isProd } = useContext(EnvContext)
  const [hover, setHover] = useState<string>('watermarked')
  const memoProductData = useMemo(() => {
    if (product) {
      const memoProducts = product
      return memoProducts
    }
  }, [product])

  return (
    <div className="product-page">
      <Container size={1280}>
        <Title align="center" mb={24} order={2}>
          {product?.products![0]?.translations![0]?.name}
        </Title>
        <Grid>
          <Grid.Col lg={9} md={12} sm={12}>
            <Grid grow>
              <Grid.Col
                lg={8}
                md={6}
                orderMd={2}
                orderSm={1}
                sm={12}
                style={{ maxHeight: '500px' }}
              >
                <CrossFade contentKey={hover}>
                  <img
                    src={`/productimages/${memoProductData?.products![0]?.images![0]?.[
                      hover
                    ].replace(isProd ? `'.jpg', '-500.jpg'` : `'', ''`)}`}
                    key={hover}
                    alt={`${
                      memoProductData?.products![0]?.translations![0]?.name
                    } - product display area`}
                    className="image-area"
                    style={{ maxHeight: '500px', borderRadius: '8px' }}
                  />
                </CrossFade>
              </Grid.Col>

              <Grid.Col
                lg={4}
                md={3}
                orderMd={1}
                orderXs={2}
                xs={12}
                className="imagePreviews"
              >
                {Object.keys(memoProductData?.products![0]?.images![0])
                  .reverse()
                  .map((imageKey, index) => {
                    return (
                      <Card
                        className="imagePreviewCard"
                        key={imageKey}
                        mb={16}
                        style={{
                          margin: '0 auto 16px',
                          alignContent: 'center',
                          justifyContent: 'center',
                          display: 'flex',
                          border:
                            hover === imageKey
                              ? '1px solid var(--mantine-color-gray-7)'
                              : 'none',
                        }}
                        onClick={() => setHover(imageKey)}
                      >
                        <img
                          alt={`${
                            memoProductData?.products![0]?.translations![0]
                              ?.name
                          } - ${imageKey}`}
                          className="image-tiles"
                          src={`/productimages/${memoProductData?.products![0]?.images![0]?.[
                            imageKey
                          ].replace(isProd ? `'.jpg', '-200.jpg'` : `'', ''`)}`}
                          style={{
                            transition: 'all .5s ease',
                            borderRadius: '6px',
                            alignSelf: 'center',
                            justifySelf: 'center',
                            margin: '0 auto',
                            opacity: hover === imageKey ? '1' : '.6',
                          }}
                        />
                      </Card>
                    )
                  })}
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col
            lg={3}
            md={12}
            sm={12}
            xs={12}
            className="productDescription"
          >
            <Text component="p" mt={0} size={20} style={{ fontWeight: 'bold' }}>
              {`$ ${memoProductData?.products![0]?.price}`}
            </Text>
            <Text component="p">Short description goes here</Text>
            <Text component="p">
              Suggested frame sizes: 5" x 7", 8" x 10", 11" x 14", 16" x 20",
              20" x 30", 22" x 32"
            </Text>
            <Button
              fullWidth
              className={clsx(
                cart.some(
                  (item) => item?.id === memoProductData?.products![0]?.id
                ) && 'inCart',
                'addToCart'
              )}
              disabled={cart.some(
                (item) => item?.id === memoProductData?.products![0]?.id
              )}
              mt={24}
              variant="outline"
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
                ? 'In Cart'
                : 'Add to cart'}
            </Button>
            <Button fullWidth mb={24} mt={24} variant="filled">
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
            <Title mb={16} mt={48} order={4}>
              Categories:
            </Title>
            {product?.products![0]?.categories![0]?.categories_id?.category.map(
              (category) => {
                return (
                  <Badge key={category} mr={16}>
                    {category}
                  </Badge>
                )
              }
            )}
          </>
        )}
        <Text component="p">
          {'Long Description here -- ' +
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
