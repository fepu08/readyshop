import { PRODUCTS_URL } from '../constants';
import { ProductType } from '../models/Product';
import { apiSlice } from './apiSlices';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], void>({
      query: () => ({ url: PRODUCTS_URL }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;
