import { useEffect, useState } from "react"

import { ImSearch } from "react-icons/im"
import { FaListUl } from "react-icons/fa"

import Card from "../components/Card"
import Loader from "../components/Loader"
import { useProducts } from "../context/ProductProvider"
import { categoriseProducts, searchProducts } from "../helpers/helper"

import styles from "./Products.module.css"

function Products() {
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState({})
  const [displayed, setDisplayed] = useState([])

  const products = useProducts() //this is state from ProductProvider and on change ProductProvider will rerender then children components will rerender too

  useEffect(() => {
    setDisplayed(products)
  }, [products])

  useEffect(() => {
    const searchedProducts = searchProducts(products, query.search)
    const categorisedProducts = categoriseProducts(
      searchedProducts,
      query.category
    )
    setDisplayed(categorisedProducts)
  }, [query])

  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }))
  }

  const categoryHandler = ({ tagName, innerText }) => {
    if (tagName !== "LI") return
    const category = innerText.toLowerCase()
    setQuery((query) => ({ ...query, category }))
  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={(e) => categoryHandler(e.target)}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Mens's Clothing</li>
            <li>Womens's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Products
