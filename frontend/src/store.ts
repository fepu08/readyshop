import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlices';
import cartSliceReducer from './slices/cartSlice';

const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer, cart: cartSliceReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
