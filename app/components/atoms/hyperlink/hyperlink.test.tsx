import HyperLink from "./hyperlink"
import { axe, render, screen } from "test/helpers"

describe("HyperLink component", () => {
  test("renders children correctly", () => {
    render(<HyperLink to="/example">Example Link</HyperLink>)
    const linkElement = screen.getByText(/Example Link/i)
    expect(linkElement).toBeInTheDocument()
  })

  // test("applies bold style if bold prop is true", () => {
  //   render(
  //     <HyperLink to="/example" bold>
  //       Example Link
  //     </HyperLink>
  //   )
  //   const linkElement = screen.getByText(/Example Link/i)
  //   expect(linkElement).toHaveStyle("font-weight: 700")
  // })

  // test("applies correct color if color prop is passed", () => {
  //   render(
  //     <HyperLink to="/example" color="blue">
  //       Example Link
  //     </HyperLink>
  //   )
  //   const linkElement = screen.getByText(/Example Link/i)
  //   expect(linkElement).toHaveClass("blue")
  // })

  test("applies className prop to link element", () => {
    const testClass = "test-class"
    render(
      <HyperLink className={testClass} to="/example">
        Example Link
      </HyperLink>
    )
    const linkElement = screen.getByText(/Example Link/i)
    expect(linkElement).toHaveClass(testClass)
  })

  test("renders internal link when to prop is passed", () => {
    render(<HyperLink to="/example">Example Link</HyperLink>)
    const linkElement = screen.getByText(/Example Link/i)
    expect(linkElement).toHaveAttribute("href", "/example")
  })

  test("renders external link when href prop is passed", () => {
    render(<HyperLink href="https://example.com">Example Link</HyperLink>)
    const linkElement = screen.getByText(/Example Link/i)
    expect(linkElement).toHaveAttribute("href", "https://example.com")
    expect(linkElement).toHaveAttribute("rel", "noreferrer")
    expect(linkElement).toHaveAttribute("target", "_blank")
  })
  test("meets minimum accessible requirements", async () => {
    const { container } = render(
      <HyperLink href="https://example.com">Example Link</HyperLink>
    )

    expect(await axe(container)).toHaveNoViolations()
  })
  test("meets minimum accessible requirements", async () => {
    const { container } = render(
      <HyperLink to="/example">Example Link</HyperLink>
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
