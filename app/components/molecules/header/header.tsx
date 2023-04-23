import {
  Header,
  Container,
  Group,
  Burger,
  Drawer,
  ActionIcon,
  useMantineColorScheme,
  Title,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { NavLink } from "@remix-run/react"
import { IconMoon, IconSun, IconShoppingCart } from "@tabler/icons-react"
import { useState } from "react"
import Cart from "../cart"
import styles from "./styles.css"
import HyperLink from "~/components/atoms/hyperlink"
import { GetProductsQuery } from "~/models/directus/sdk"

/* c8 ignore start */
export const links = () => {
  return [{ rel: "stylesheet", href: styles }]
}
/* c8 ignore end */

interface HeaderMenuProps {
  button?: boolean
  links: {
    link: string
    label: string
    links?: { link: string; label: string }[]
  }[]
  allProducts: GetProductsQuery
}

export default function HeaderMenu({ links, allProducts }: HeaderMenuProps) {
  const [mobileMenuOpened, { toggle }] = useDisclosure(false)
  const [cartMenuOpen, setCartMenuOpen] = useState<boolean>(false)
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
  }

  const items = links.map((link) => {
    if (mobileMenuOpened) {
      return (
        <NavLink
          key={link.label}
          className="mobileLink"
          prefetch="intent"
          style={({ isActive }) => (isActive ? activeStyle : {})}
          to={link.link}
          onClick={toggle}
        >
          {link.label}
        </NavLink>
      )
    }
    return (
      <NavLink
        key={link.label}
        className="link"
        prefetch="intent"
        style={({ isActive }) => (isActive ? activeStyle : {})}
        to={link.link}
      >
        {link.label}
      </NavLink>
    )
  })

  return (
    <Header className="header" height={60}>
      <Container fluid className="inner">
        <Burger
          className="burger"
          opened={mobileMenuOpened}
          size="sm"
          title={`Menu Toggle : Click to open/close`}
          onClick={toggle}
        />
        <Group>
          <HyperLink bold to="/">
            <Title className="logo tangerine" order={2}>
              {"Pixel Perfect Art Shop"}
            </Title>
          </HyperLink>
        </Group>
        <Group className="links" spacing={16}>
          {items}
          <ActionIcon
            aria-label="color scheme toggle"
            className="colorToggle"
            size="lg"
            onClick={() => toggleColorScheme()}
          >
            {colorScheme === "dark" ? (
              <IconSun color={"var(--mantine-color-white)"} />
            ) : (
              <IconMoon color={"var(--mantine-color-blue-8)"} />
            )}
          </ActionIcon>
          <ActionIcon
            aria-label="shopping cart"
            className="colorToggle"
            size="lg"
            onClick={() => setCartMenuOpen(!cartMenuOpen)}
          >
            <IconShoppingCart color={"var(--mantine-color-white)"} />
          </ActionIcon>
        </Group>
        {mobileMenuOpened && (
          <Drawer
            aria-label="Mobile Menu"
            className="navDrawer"
            opened={mobileMenuOpened}
            padding="lg"
            size={"100%"}
            onClose={toggle}
          >
            {items}
          </Drawer>
        )}
        {cartMenuOpen && (
          <Drawer
            aria-label="Cart"
            className="cartDrawer"
            opened={cartMenuOpen}
            padding="lg"
            position="right"
            size={"300px"}
            onClose={() => setCartMenuOpen(false)}
          >
            <Cart allProducts={allProducts} aria-labelledby="cart drawer" />
          </Drawer>
        )}
      </Container>
    </Header>
  )
}
