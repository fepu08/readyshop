import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlices';
import cartSliceReducer from './slices/cartSlice';
import authSlicerReducer from './slices/authSlice';

const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer, cart: cartSliceReducer, auth: authSlicerReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
