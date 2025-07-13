import { createQueryObject } from "../helpers/helper"

import { FaListUl } from "react-icons/fa"

function Sidebar({ setQuery }) {
  const categoryHandler = ({ tagName, innerText }) => {
    if (tagName !== "LI") return
    const category = innerText.toLowerCase()
    setQuery((query) => createQueryObject(query, { category }))
  }

  return (
    <div>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={(e) => categoryHandler(e.target)}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
      </ul>
    </div>
  )
}

export default Sidebar
