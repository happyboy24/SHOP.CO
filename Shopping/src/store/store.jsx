import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../apis/ProductsApi';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productApi.middleware)
});

export default store;

