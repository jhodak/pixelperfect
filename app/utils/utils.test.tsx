import { formatGoogleDriveURL, findIndex } from './utils'
import { CartItem } from '~/context/cart'

describe('formatGoogleDriveURL', () => {
  test('should format URL with default size when size is not provided', () => {
    const url = 'https://drive.google.com/u/0/someId'
    const expectedUrl = 'https://lh3.googleusercontent.com/d/someId=s300'
    expect(formatGoogleDriveURL(url)).toBe(expectedUrl)
  })

  test('should format URL with provided size', () => {
    const url = 'https://drive.google.com/u/0/someOtherId'
    const size = 500
    const expectedUrl = `https://lh3.googleusercontent.com/d/someOtherId=s${size}`
    expect(formatGoogleDriveURL(url, size)).toBe(expectedUrl)
  })
})

describe('findIndex', () => {
  test('should return index of item from provided data array', () => {
    const data: CartItem[] = [
      { id: 'a', quantity: 1 },
      { id: 'b', quantity: 2 },
    ]
    const idStr = 'b'
    expect(findIndex(data, idStr)).toBe(1)
  })

  test('should return -1 if item with provided id is not found in data array', () => {
    const data: CartItem[] = [
      { id: 'a', quantity: 1 },
      { id: 'b', quantity: 2 },
    ]
    const idStr = 'c'
    expect(findIndex(data, idStr)).toBe(-1)
  })
})
