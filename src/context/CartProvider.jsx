import { createContext, useContext, useReducer } from "react"

const initialState = {
  selectedItems: [],
  itemsCouter: 0,
  totalPrice: 0,
  checkout: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id))
        state.selectedItems.push({ ...action.payload, quantity: 1 })
      else
        state.selectedItems.map((item) => {
          if (item.id === action.payload.id) item.quantity += 1
        })
      return {
        selectedItems: [...state.selectedItems],
        itemsCouter: state.itemsCouter + 1,
        totalPrice: state.totalPrice + action.payload.price,
        checkout: false,
      }

    default:
      throw new Error("Invalid Action!")
  }
}

const CartContext = createContext()

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext)
  return [state, dispatch]
} //custom hook

export default CartProvider
export { useCart }
