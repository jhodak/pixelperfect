export function formatGoogleDriveURL(url: string, size?: number) {
  const urlArray = url.split("/")
  const id = urlArray[5]
  return `https://lh3.googleusercontent.com/d/${id}=s${
    size?.toString() ?? "300"
  }`
}
