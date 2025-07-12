import Card from "../components/Card"
import Loader from "../components/Loader"
import { useProducts } from "../context/ProductProvider"
import styles from "./Products.module.css"

function Products() {
  const products = useProducts() //this is state from ProductProvider and on change ProductProvider will rerender then children components will rerender too
  console.log(useProducts())
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  )
}

export default Products
