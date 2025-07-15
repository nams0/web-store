import BasketCard from "../components/BasketCard"
import { useCart } from "../context/CartProvider"

function CheckoutPage() {
  const [state, dispatch] = useCart()

  return (
    <div>
      <div>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} product={product} dispatch={dispatch}/>
        ))}
      </div>
    </div>
  )
}

export default CheckoutPage
