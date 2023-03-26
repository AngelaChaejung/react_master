import { configureStore, createSlice } from "@reduxjs/toolkit";

const watched = createSlice({
  name: "watched",
  initialState: [],
  reducers: {
    addWatched(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addWatched } = watched.actions;
export default watched;
