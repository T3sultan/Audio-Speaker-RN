import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DATA, PRODUCT_IMAGE_MAP } from "../../data/product-image-map";

const initialState = {
  products: DATA,
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://103.28.121.57/api/products");
    return response.json();
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, actions) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "success";
      const { payload } = action;

      console.log(payload);
      payload.products.forEach(product => {
        product.featuredImage = PRODUCT_IMAGE_MAP[product.name].featuredImage;
        product.images = PRODUCT_IMAGE_MAP[product.name].images;
      });
      state.status = "success";
      state.products = payload.products;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectStatus = state => state.products.status;
export const selectFeaturedProducts = state =>
  state.products.products.filter(item => item.is_featured);

export const selectHeadPhones = state =>
  state.products.products.filter(item => item.category === "headphones");

export const selectEarPhones = state =>
  state.products.products.filter(item => item.category === "earphones");

export const selectSpeakers = state =>
  state.products.products.filter(item => item.category === "speakers");

export default productSlice.reducer;
