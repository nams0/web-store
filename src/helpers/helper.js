const shortenText = (text) => text.split(" ").slice(0, 3).join(" ")

const searchProducts = (products, search) => {
  if (!search) return products
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  )
  return searchedProducts
}

const categoriseProducts = (searchedProducts, category) => {
  if (!category) return searchedProducts
  const categorisedProducts = searchedProducts.filter(
    (searchedProduct) => searchedProduct.category === category
  )
  return categorisedProducts
}

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery
    return rest
  }

  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery
    return rest
  }

  return { ...currentQuery, ...newQuery }
}

const getInitialQuery = (searchParams) => {
  const query = {}
  const category = searchParams.get("category")
  const search = searchParams.get("search")
  if (category) query.category = category
  if (search) query.search = search
  return query
}

export {
  shortenText,
  searchProducts,
  categoriseProducts,
  createQueryObject,
  getInitialQuery,
}
