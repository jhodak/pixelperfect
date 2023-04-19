import { Text, Title, Button, Group, Footer } from "@mantine/core"
import { useContext } from "react"
import { GetProductsQuery } from "~/models/directus/sdk"
import styles from "./styles.css"
import { Link } from "@remix-run/react"
import { CartContext } from "~/context/cart"

export const links = () => {
  return [{ rel: "stylesheet", href: styles }]
}

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
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  height="60"
                  width="40"
                  src={`/productimages/${product.images[0].watermarked}`}
                  style={{ marginRight: "24px" }}
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
                variant="outline"
                color="red"
                compact
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
          <Button fullWidth variant="filled" color="primary" mt={24} mb={24}>
            {`Checkout $ ${total.toFixed(2)}`}
          </Button>
        </Footer>
      </div>
    </>
  )
}
