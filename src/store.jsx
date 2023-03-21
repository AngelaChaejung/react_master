import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

const stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      const number = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[number].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addCount } = cart.actions;
export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
  },
});
