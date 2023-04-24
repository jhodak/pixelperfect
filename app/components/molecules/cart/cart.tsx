import { Text, Title, Button, Group, Footer } from '@mantine/core'
import { useContext } from 'react'
import styles from './styles.css'
import { CartContext } from '~/context/cart'
import { GetProductsQuery } from '~/models/directus/sdk'

/* c8 ignore start */
export const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}
/* c8 ignore end */

interface productTypes {
  allProducts: GetProductsQuery
}

export default function Cart({ allProducts }: productTypes) {
  const { cart, removeFromCart } = useContext(CartContext)
  let total: number = 0
  return (
    <>
      <div>
        {allProducts?.products?.flatMap((product) => {
          const cartItem = cart?.find((item) => item.id === product.id)
          if (!cartItem) return []
          const key = `${product.id}-${cartItem.id}`
          total += cartItem.quantity * +product.price
          return (
            <Group key={key} align="center" mb={24} position="apart">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <img
                  alt={`thumbnail of ${product?.translations![0]?.name}`}
                  height="60"
                  src={`/productimages/${product.images[0].watermarked}`}
                  style={{ marginRight: '24px' }}
                  width="40"
                />
                <div>
                  <Title order={4}>{product?.translations![0]?.name}</Title>
                  <Text
                    component="p"
                    mb={0}
                    mt={8}
                  >{`${cartItem.quantity} @ $ ${product.price}`}</Text>
                </div>
              </div>
              <Button
                compact
                color="red"
                variant="outline"
                onClick={() => removeFromCart(cartItem.id)}
              >
                X
              </Button>
            </Group>
          )
        })}
        <Group position="apart">
          <Text component="p">Total:</Text>
          <Text component="p">{`$ ${total.toFixed(2)}`}</Text>
        </Group>
        <Footer className="cartFooter" height="60">
          <Button
            fullWidth
            color="primary"
            component="a"
            href="/checkout"
            mb={24}
            mt={24}
            variant="filled"
          >
            {`Checkout $ ${total.toFixed(2)}`}
          </Button>
        </Footer>
      </div>
    </>
  )
}
