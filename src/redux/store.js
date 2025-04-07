import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../features/coins/coinSlice";

const store = configureStore({
  reducer: {
    coins: coinReducer,
  },
});

export default store;
