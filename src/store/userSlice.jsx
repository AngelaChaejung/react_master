import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { name: "Kim", age: 20 },
  reducers: {
    changeName() {
      return { name: "John", age: 20 };
    },
    changeAge(state, a) {
      state.age += a.payload;
    },
  },
});
export const { changeName, changeAge } = user.actions;
export default user;
