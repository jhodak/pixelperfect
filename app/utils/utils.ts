import { CartItem } from "~/context/cart"

export function formatGoogleDriveURL(url: string, size?: number) {
  const urlArray = url.split("/")
  const id = urlArray[5]
  return `https://lh3.googleusercontent.com/d/${id}=s${
    size?.toString() ?? "300"
  }`
}

// function for finding the position of an element in an array by the value of elements inside the array
export const findIndex = (data: CartItem[], idStr: string) => {
  return data.findIndex((item) => item.id === idStr)
}
