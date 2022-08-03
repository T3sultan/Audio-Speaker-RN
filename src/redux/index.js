import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productSlice from "./productSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  products: productSlice,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
