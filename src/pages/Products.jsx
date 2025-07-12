import { useProducts } from "../context/ProductProvider"

function Products() {
  console.log(useProducts())
  return <div>Products</div>
}

export default Products
