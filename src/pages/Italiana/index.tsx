import { Bannerimage, BannerLogo, BotaoCart, Massa, Massa2, MassaTitulo,  MassaWrapper,  Restaurant, } from "./styles";
import BannerFundo from "../../imagens/2page/Vector.png"
import logo from "../../imagens/logo.png"
import MassaImage from "../../imagens/2page/image.png"
import { MassaContainer  } from "./Card/styles";
import CardPage2 from "./Card";
import {open} from '../../store/reducers/cart'
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";


const Italiana = () => {
  const dispatch = useDispatch()
const {items} =  useSelector((state: RootReducer) => state.cart)

  const OpenCart = () => {
    dispatch(open())
  }

  return (
<>
  <Bannerimage style={{ backgroundImage: `url(${BannerFundo})` }}>
    <Restaurant>Restaurantes</Restaurant>
    <BannerLogo src={logo} alt="Logo" />
    <BotaoCart onClick={OpenCart}>
      {items.length} Produtos(s) no carrinho</BotaoCart>
  </Bannerimage>
      <MassaWrapper>
        <Massa style={{ backgroundImage: `url(${MassaImage})` }}/>
        <MassaTitulo>Italiana
          <Massa2>
          La Dolce Vita Trattoria
          </Massa2>
        </MassaTitulo>
    </MassaWrapper>
      <MassaContainer>
        <CardPage2 />
    </MassaContainer>
</>
  )
}




export default Italiana

function dispatch() {
  throw new Error("Function not implemented.");
}
