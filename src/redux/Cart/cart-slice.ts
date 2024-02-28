import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../data/products";

interface CartState {
  cart: Product[];
  showCart: boolean;
}

const initialState: CartState = {
  cart: [],
  showCart: false,
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProduct: (state, action) => {
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );

      state.cart = cartFiltered;
    },
    clear: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
