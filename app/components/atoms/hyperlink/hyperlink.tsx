import { Anchor, MantineColor, Text } from "@mantine/core"
import { Link } from "@remix-run/react"

type links = {
  to?: string
  href?: string
  bold?: boolean
  onClick?: () => Function
  className?: string
  children: JSX.Element | string | number
  color?: MantineColor
}

export default function HyperLink(data: links) {
  return (
    <Text
      color={data.color}
      component="span"
      weight={data.bold ? "700" : "500"}
    >
      {data.to && (
        <Link
          className={data.className}
          prefetch="intent"
          style={{ color: "inherit", textDecoration: "none" }}
          to={data.to}
        >
          <>{data.children}</>
        </Link>
      )}
      {data.href && (
        <Anchor
          className={data.className}
          href={data.href}
          rel="noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
          target="_blank"
        >
          {data.children}
        </Anchor>
      )}
    </Text>
  )
}
