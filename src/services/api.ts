import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cardapio } from '../pages/Pratos/Card';

export type Products = {
  id: number;
  price: number;
};

export type Delivery = {
  receiver: string;
  
  address: {
    description: string;
    city: string;
    zipCode: string;
    number: string;
    complement?: string;
  };
};

export type Payment = {
  card: {
    name: string;
    number: string;
    code: string;
    expires: {
      month: string;
      year: string;
    };
  };
};

export type CompraApi = {
  unwrap(): unknown;
  products: Products[];
  delivery: Delivery;
  payment: Payment;
};

export type Compra = {
  orderId:string;
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ebac-fake-api.vercel.app/api/efood/',
  }),
  endpoints: (builder) => ({
    getPrato: builder.query<Cardapio, void>({
      query: () => 'Cardapio',
    }),
    purchase: builder.mutation<any, CompraApi>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetPratoQuery, usePurchaseMutation } = api;
export default api;
