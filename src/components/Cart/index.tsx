import {  ButtonCart, CartItem, Preco, Valor,   } from "./styles"
import { CartContainer, Overlay, SideBar } from "./styles"
import Pizza from '../../imagens/2page/pizza3.png'
import Lixo from '../../imagens/2page/c2510f15841e4855c13cfe444448798eeb37c734.png'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from "../../pages/Italiana/Card"

const Cart = () => {

const {isOpen, items} = useSelector((state:RootReducer)=> state.cart)

const dispatch = useDispatch()

const closeCart = () => {
    dispatch(close())
}

const getPrecoTotal = () => {
    return    items.reduce((acumulador , valorAtual) => {
    return (acumulador += valorAtual.preco!)
}, 0)
}

const removerItem = (id:number) => (
    dispatch(remove(id))
)

return (
<CartContainer className={isOpen ? 'is-open':' '}>
    <Overlay onClick={closeCart}/>
    <SideBar>
    <ul>
        {items.map ((item) =>(
            <CartItem key={item.id} >
            <div>
            <img src={item.foto} />
            <h3>{item.nome}</h3>
            <span>{formataPreco(item.preco ?? 0)}</span>
            <img onClick={() => removerItem(item.id)} className="Lixeira" src={Lixo}/>
            </div>
            </CartItem>
))}
        <Valor>Valor total</Valor>
        <Preco>{formataPreco(getPrecoTotal())}</Preco>
        <ButtonCart>Continuar com a entrega</ButtonCart>
    </ul>
    </SideBar>
</CartContainer>
)    
}

export default Cart