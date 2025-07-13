const shortenText = (text) => text.split(" ").slice(0, 3).join(" ")

const searchProducts = (products, search) => {
  if (!search) return products
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  )
  return searchedProducts
}

const categoriseProducts = (searchedProducts, category) => {
  if (!category || category === "all") return searchedProducts
  const categorisedProducts = searchedProducts.filter(
    (searchedProduct) => searchedProduct.category === category
  )
  return categorisedProducts
}

export { shortenText, searchProducts, categoriseProducts }
