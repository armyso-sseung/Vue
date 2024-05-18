export const prependSlash = (imagePath: string) => {
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`
}
