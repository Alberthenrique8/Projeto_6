import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Cardapio } from '../pages/Italiana/Card'

const api = createApi ({
    baseQuery:fetchBaseQuery({
        baseUrl:'https://ebac-fake-api.vercel.app/api/efood/restaurantes'
    }),
    endpoints:(builder) => ({
        getPrato: builder.query<Cardapio, void>({
            query:() => 'Cardapio'
        })
    })
})

export const {useGetPratoQuery} = api;

export default api