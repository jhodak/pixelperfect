import {
  Header,
  Container,
  Group,
  Text,
  Burger,
  Drawer,
  ActionIcon,
  useMantineColorScheme,
  Title,
  Button,
  Footer,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { NavLink } from "@remix-run/react"

import HyperLink from "~/components/atoms/hyperlink"
import styles from "./styles.css"
import { IconMoon, IconSun, IconShoppingCart } from "@tabler/icons-react"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "~/context/cart"
import { GetProductsQuery } from "~/models/directus/sdk"
import Cart from "../cart"

export const links = () => {
  return [{ rel: "stylesheet", href: styles }]
}

interface HeaderMenuProps {
  button: boolean
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
          to={link.link}
          style={({ isActive }) => (isActive ? activeStyle : {})}
          className="mobileLink"
          prefetch="intent"
          onClick={toggle}
        >
          {link.label}
        </NavLink>
      )
    }
    return (
      <NavLink
        key={link.label}
        to={link.link}
        style={({ isActive }) => (isActive ? activeStyle : {})}
        className="link"
        prefetch="intent"
      >
        {link.label}
      </NavLink>
    )
  })

  return (
    <Header className="header" height={60}>
      <Container className="inner" fluid>
        <Burger
          opened={mobileMenuOpened}
          onClick={toggle}
          className="burger"
          size="sm"
          title={`Menu Toggle : Click to open/close`}
        />
        <Group>
          <HyperLink to="/" bold>
            <Title order={2} className="logo tangerine">
              {"Pixel Perfect Art Shop"}
            </Title>
          </HyperLink>
        </Group>
        <Group spacing={16} className="links">
          {items}
          <ActionIcon
            className="colorToggle"
            onClick={() => toggleColorScheme()}
            size="lg"
          >
            {colorScheme === "dark" ? (
              <IconSun color={"var(--mantine-color-white)"} />
            ) : (
              <IconMoon color={"var(--mantine-color-blue-8)"} />
            )}
          </ActionIcon>
          <ActionIcon
            className="colorToggle"
            onClick={() => setCartMenuOpen(!cartMenuOpen)}
            size="lg"
          >
            <IconShoppingCart color={"var(--mantine-color-white)"} />
          </ActionIcon>
        </Group>
        {mobileMenuOpened && (
          <Drawer
            className="navDrawer"
            opened={mobileMenuOpened}
            onClose={toggle}
            size={"100%"}
            padding="lg"
          >
            {items}
          </Drawer>
        )}
        {cartMenuOpen && (
          <Drawer
            className="cartDrawer"
            opened={cartMenuOpen}
            onClose={() => setCartMenuOpen(false)}
            size={"300px"}
            padding="lg"
            position="right"
          >
            <Cart allProducts={allProducts} />
          </Drawer>
        )}
      </Container>
    </Header>
  )
}
