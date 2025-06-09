import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  CartsItem,
  ProductData,
  PurchaseItem,
} from "../../../TypeScript/constrain";
import {
  addToCart,
  deleteCarts,
  fetchProducts,
  fetchSingleProduct,
  getCarts,
  getMyOrder,
  myOrderPlaced,
  updateQuantityCarts,
} from "./productThunks";

const initialState: {
  products: Array<ProductData>;
  singleProduct: ProductData | object;
  productLength: number;
  orderedProducts: Array<PurchaseItem>;
  carts: Array<CartsItem>;
} = {
  products: [],
  singleProduct: {},
  productLength: 0,
  orderedProducts: [],
  carts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (
      state,
      action: PayloadAction<{
        products: Array<ProductData>;
        productLength: number;
      }>
    ) => {
      const { products, productLength } = action.payload;
      state.products = products;
      state.productLength = productLength;
    },
    getSingleProduct: (state, action) => {
      state.singleProduct = action.payload;
    },
    orderProducts: (
      state,
      action: PayloadAction<{ orderedProducts: Array<PurchaseItem> }>
    ) => {
      const { orderedProducts } = action.payload;
      state.orderedProducts = orderedProducts;
    },
    cartsProducts: (
      state,
      action: PayloadAction<{ cartProducts: Array<CartsItem> }>
    ) => {
      const { cartProducts } = action.payload;
      state.carts = cartProducts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (action.meta.arg.page > 1) {
          // Append for next pages
          state.products = [...state.products, ...action.payload.products];
        } else {
          // First page, replace
          state.products = action.payload.products;
        }
        state.productLength = action.payload.totalProductLength;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
      })
      .addCase(getMyOrder.fulfilled, (state, action) => {
        state.orderedProducts = action.payload;
      })
      .addCase(myOrderPlaced.fulfilled, (_state, action) => {
        console.log(`order Palced Status ${action.payload}`);
      })

      .addCase(addToCart.fulfilled, (_state, action) => {
        // state.carts.push(action.payload)
        console.log(`Add To Cart Status ${action.payload}`);
      })
      .addCase(getCarts.fulfilled, (state, action) => {
        state.carts = action.payload.carts;
      })
      .addCase(deleteCarts.fulfilled, (state, action) => {
        state.carts = state.carts.filter(
          (item) => item.product._id !== action.meta.arg.id
        );
        console.log(`Delete Carts Status ${action.payload}`);
      })
      .addCase(updateQuantityCarts.fulfilled, (_state, action) => {
        console.log(`Update Carts Status ${action.payload}`);
      });
  },
});

export const { getProducts, orderProducts } = productSlice.actions;
export default productSlice.reducer;
