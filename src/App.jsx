import { Routes, Route, Navigate } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import Products from "./pages/Products"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import CheckoutPage from "./pages/CheckoutPage"
import ProductProvider from "./context/ProductProvider"
import CartProvider from "./context/CartProvider"

function App() {
  return (
    <div>
      <CartProvider>
        <ProductProvider>
          <Routes>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </ProductProvider>
      </CartProvider>
    </div>
  )
}

export default App
