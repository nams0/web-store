import Card from "../components/Card"
import { useProducts } from "../context/ProductProvider"
import styles from "./Products.module.css"

function Products() {
  const products = useProducts() //this is state from ProductProvider and on change ProductProvider will rerender then children components will rerender too
  console.log(useProducts())
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <h1>Loading ...</h1>}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  )
}

export default Products
