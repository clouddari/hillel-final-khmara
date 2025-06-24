import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  removeProduct,
} from "../api/productsAPI";

export const loadProducts = createAsyncThunk("products/load", async () => {
  const response = await fetchProducts();
  return response.data;
});

export const addProduct = createAsyncThunk("products/add", async (product) => {
  const response = await createProduct(product);
  return response.data;
});

export const editProduct = createAsyncThunk(
  "products/edit",
  async (product) => {
    const response = await updateProduct(product);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  await removeProduct(id);
  return id;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload);
      });
  },
});

export default productsSlice.reducer;
