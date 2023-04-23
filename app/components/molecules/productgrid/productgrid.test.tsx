import { vi } from "vitest"
import ProductGrid from "./index"
import { axe, render, screen } from "test/helpers"
import { CartContext } from "~/context/cart"

const productDataMock = {
  products: [
    {
      id: "1",
      price: "12.34",
      images: [
        {
          mockup: "mockup1.jpg",
          watermarked: "watermark1.jpg",
        },
      ],
      translations: [
        {
          name: "Product 1",
        },
      ],
    },
    {
      id: "2",
      price: "56.78",
      images: [
        {
          mockup: "mockup2.jpg",
          watermarked: "watermark2.jpg",
        },
      ],
      translations: [
        {
          name: "Product 2",
        },
      ],
    },
  ],
}

describe("ProductGrid", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it("renders properly with given props", () => {
    render(
      <CartContext.Provider
        value={{ cart: [], addToCart: vi.fn(), removeFromCart: vi.fn() }}
      >
        <ProductGrid productsData={productDataMock} title="Latest Products" />
      </CartContext.Provider>
    )

    // Check if title is rendered properly
    const titleElement = screen.getByText("Latest Products")
    expect(titleElement).toBeInTheDocument()

    // Check if products are rendered properly with their names and prices
    const productOneName = screen.getByText("Product 1")
    const productOnePrice = screen.getByText("$ 12.34")
    const productTwoName = screen.getByText("Product 2")
    const productTwoPrice = screen.getByText("$ 56.78")
    expect(productOneName).toBeInTheDocument()
    expect(productOnePrice).toBeInTheDocument()
    expect(productTwoName).toBeInTheDocument()
    expect(productTwoPrice).toBeInTheDocument()

    // Check if images are rendered properly
    const productOneImage = screen.getByAltText(
      "Product 1 pictured framed on a white wall."
    )
    const productTwoImage = screen.getByAltText(
      "Product 2 pictured framed on a white wall."
    )
    expect(productOneImage).toHaveAttribute("src", "/productimages/mockup1.jpg")
    expect(productTwoImage).toHaveAttribute("src", "/productimages/mockup2.jpg")

    // Check if add to cart button is rendered properly
    const addToCartButton = screen.getAllByText("Add to cart")
    expect(addToCartButton).toHaveLength(2)

    // Make sure pagination shows up
    const pagination = screen.getAllByText("1")
    expect(pagination).toHaveLength(2)
  })
  it("meets minimum accessible requirements", async () => {
    const { container } = render(
      <CartContext.Provider
        value={{ cart: [], addToCart: vi.fn(), removeFromCart: vi.fn() }}
      >
        <ProductGrid productsData={productDataMock} title="Latest Products" />
      </CartContext.Provider>
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
