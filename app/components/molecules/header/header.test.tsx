import { ColorSchemeProvider } from "@mantine/core"
import { vi } from "vitest"
import HeaderMenu from "./header"
import { render, screen, fireEvent, userEvent } from "test/helpers"
import { CartContextProvider } from "~/context/cart"

describe("HeaderMenu", () => {
  const allProducts = { products: [] } //dummy data
  const testLinks = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About" },
    { link: "/contact", label: "Contact" },
  ]

  it("renders the logo", () => {
    render(
      <ColorSchemeProvider colorScheme="dark" toggleColorScheme={vi.fn()}>
        <CartContextProvider>
          <HeaderMenu allProducts={allProducts} links={testLinks} />
        </CartContextProvider>
      </ColorSchemeProvider>
    )
    const logoText = screen.getByText(/Pixel Perfect Art Shop/i)
    expect(logoText).toBeInTheDocument()
  })

  // need to fix by explicitly setting window size to mobile so the mobile stuff shows up appropriately

  // it("opens and closes mobile menu on burger click", async () => {
  //   const mockScreen = render(
  //     <ColorSchemeProvider colorScheme="dark" toggleColorScheme={vi.fn()}>
  //       <CartContextProvider>
  //         <HeaderMenu links={testLinks} allProducts={allProducts} />
  //       </CartContextProvider>
  //     </ColorSchemeProvider>
  //   )
  //   const burger = screen.getByLabelText(/Mobile Menu/i)
  //   console.log(burger)
  //   const mobileLink = screen.queryByRole("dialog")

  //   expect(mobileLink).toBeNull()
  //   await userEvent.click(burger)

  //   console.log(mockScreen)
  //   console.log(mobileLink)
  //   expect(mobileLink).toBeVisible()
  //   await userEvent.click(burger)
  //   expect(mobileLink).toBeNull()
  // })
})
