import {
  Header,
  Container,
  Group,
  Text,
  Burger,
  Drawer,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { NavLink } from "@remix-run/react"

import HyperLink from "~/components/atoms/hyperlink"
import styles from "./styles.css"
import { IconMoon, IconSun } from "@tabler/icons-react"

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
}

export default function HeaderMenu({ links }: HeaderMenuProps) {
  const [opened, { toggle }] = useDisclosure(false)
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
  }

  const items = links.map((link) => {
    // const menuItems = link.links?.map((item) => (
    //   <Menu.Item key={item.link}>{item.label}</Menu.Item>
    // ))

    // if (menuItems) {
    //   return (
    //     <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
    //       <Menu.Target>
    //         <NavLink
    //           to={link.link}
    //           className={classes.link}
    //           style={({ isActive }) => (isActive ? activeStyle : {})}
    //           prefetch="intent"
    //           // onClick={(event) => event.preventDefault()}
    //         >
    //           <Center>
    //             <span className={classes.linkLabel}>{link.label}</span>
    //             <IconChevronDown size={12} stroke={1.5} />
    //           </Center>
    //         </NavLink>
    //       </Menu.Target>
    //       <Menu.Dropdown>{menuItems}</Menu.Dropdown>
    //     </Menu>
    //   )
    // }

    if (opened) {
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
        <Group>
          <HyperLink to="/" bold>
            <>
              <img
                src="/crown.svg"
                width={32}
                style={{ marginRight: "12px" }}
                alt="Pixel Perfect Art Shop Logo"
              />
              {"Pixel Perfect Art Shop"}
            </>
          </HyperLink>
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className="burger"
          size="sm"
          title={`Menu Toggle : Click to open/close`}
        />
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
        </Group>
        {opened && (
          <Drawer
            className="navDrawer"
            opened={opened}
            onClose={toggle}
            size={"100%"}
            padding="lg"
          >
            {items}
          </Drawer>
        )}
      </Container>
    </Header>
  )
}
