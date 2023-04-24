import FooterLayout from './footer'
import { render, screen, axe } from 'test/helpers'

describe('FooterLayout', () => {
  it('has correct copyright text', () => {
    render(<FooterLayout />)
    const currentYear = new Date().getFullYear()
    const copyright = screen.getByText(`©${currentYear} Pixel Perfect Art Shop`)

    expect(copyright).toBeInTheDocument()
  })
  it('renders powered by content', () => {
    render(<FooterLayout />)
    const poweredByText = 'Powered by: Coal and Sunshine'
    const poweredBy = screen.getByText(poweredByText)
    expect(poweredBy).toBeInTheDocument()
  })

  it('meets minimum accessible requirements', async () => {
    const { container } = render(<FooterLayout />)

    expect(await axe(container)).toHaveNoViolations()
  })
})
