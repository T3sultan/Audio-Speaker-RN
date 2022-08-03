import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { PRODUCT_IMAGE_MAP } from "../data/products";

const initialState = {
  products: [],
  state: "idle",
  error: null,
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("../data/products.js");
    return response.json();
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "success";
      const { payload } = action;
      // payload.products.forEach(product => {
      //   product.featureImage = PRODUCT_IMAGE_MAP[product.name].featureImage;
      //   product.images = PRODUCT_IMAGE_MAP[product.name].images;
      // });
      state.products = payload.products;
      console.log("api response", payload);
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectStatus = state => state.products.status;

export default productSlice.reducer;
