import { createContext, useContext, useReducer, useEffect } from "react";
import CartReducer from "../reducer/CartReducer";

const CartContext = createContext();
// const initialState = {
//     // cart: [],
//   cart: [],
//   total_item: "",
//   total_amount: "",
//   shipping_fee: 50000,
// };
//
const getLocalCartData = () => {
  const localCartData = localStorage.getItem("rCart");
  if (!localCartData) {
    return [];
  } else {
    try {
      return JSON.parse(localCartData);
      // initialState.cart.push(...localCartData);
    } catch (e) {
      console.error("Error parsing local storage data: ", e);
      return [];
    }
  }
};
//
const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // increment and decrement the product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // to remove the individual item from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  // to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  // !!!!!!!!!!!!!!!!!!!!!
  // useEffect(() => {
  //   getLocalCartData();
  // }, [state.cart]);
  // to add the data in localStorage

  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    dispatch({ type: "CART_TOTAL_ITEM" });
    localStorage.setItem("rCart", JSON.stringify(state.cart));
  }, [state.cart]);

  //
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
