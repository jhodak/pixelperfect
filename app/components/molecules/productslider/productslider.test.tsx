import ProductSlider from "./productslider"
import { axe, render, screen } from "test/helpers"

describe("ProductSlider", () => {
  const mockData = {
    products: [
      {
        id: "1",
        name: "Product One",
        price: "10",
        images: [{ mockup: "mockup1.jpg", watermarked: "watermarked1.jpg" }],
        translations: [{ name: "Product Uno" }],
      },
      {
        id: "2",
        name: "Product Two",
        price: "20",
        images: [{ mockup: "mockup2.jpg", watermarked: "watermarked2.jpg" }],
        translations: [{ name: "Product Dos" }],
      },
    ],
  }

  test("renders carousel with correct number of products", () => {
    render(<ProductSlider productsData={mockData} title="Latest Products" />)

    const carousel = screen.getByRole("group", { name: "carousel" })
    expect(carousel).toBeInTheDocument()

    const slides = screen.getAllByLabelText("product slide")
    expect(slides.length).toEqual(2)
  })

  test("renders product data correctly", () => {
    render(<ProductSlider productsData={mockData} title="Latest Products" />)

    const productName1 = screen.getByText("Product Uno")
    expect(productName1).toBeInTheDocument()

    const productName2 = screen.getByText("Product Dos")
    expect(productName2).toBeInTheDocument()

    const productPrice1 = screen.getByText("$ 10")
    expect(productPrice1).toBeInTheDocument()

    const productPrice2 = screen.getByText("$ 20")
    expect(productPrice2).toBeInTheDocument()
  })
  it("meets minimum accessible requirements", async () => {
    const { container } = render(
      <ProductSlider productsData={mockData} title="Latest Products" />
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
