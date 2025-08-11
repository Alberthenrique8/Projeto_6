import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Pratos/Card/index'


type CartState = {
    items: Cardapio[]
    isOpen:boolean
}

const initialState: CartState = {
    items:[],
    isOpen:false
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add:  (state, action: PayloadAction<Cardapio>) => {
            const prato = state.items.find(item => item.id === action.payload.id)
        if (!prato ) {
            state.items.push(action.payload)
        } else  {
                alert('O Prato Já Está No Carrinho')
            }
        },

        remove:  (state, action: PayloadAction<number>) => {
            state.items =state.items.filter((item) => item.id !== action.payload)
        },
        open:(state) => {
            state.isOpen = true
        },
        close:(state) => {
            state.isOpen = false
        },
    }
})

export const {add , open, close, remove } = cartSlice.actions
export default cartSlice.reducer