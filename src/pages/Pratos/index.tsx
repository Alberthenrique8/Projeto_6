import { Bannerimage, BannerLogo, BotaoCart, Massa, Massa2, MassaTitulo,  MassaWrapper,  Restaurant, } from "./styles";
import BannerFundo from "../../imagens/2page/Vector.png"
import logo from "../../imagens/logo.png"
import { MassaContainer  } from "./Card/styles";
import CardPage2 from "./Card";
import {open} from '../../store/reducers/cart'
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { useParams } from "react-router-dom";
import Italiana from "../../imagens/italianaCapa.jpeg"
import Arabe from "../../imagens/ArabeCapa.jpeg"
import Japones from "../../imagens/JaponesCapa.jpeg"
import Portugues from "../../imagens/PortiguesCapa.jpeg"
import Pizzaria from "../../imagens/PizzariaCapa.png"
import Vegano from "../../imagens/VeganoCapa.png"

const HeroPratos = ()  => {
  const {id} = useParams()

  const restaurantesMap: {[key:string]: {tituloHero:string, subtituloHero?:string, imagemHero?:string}} = {
    
    "1":{tituloHero: "italiana", subtituloHero: "Bella Tavola Italiana", imagemHero:Italiana},
    "2":{tituloHero: "Arabe", subtituloHero: "Casa das Delícias Árabes", imagemHero:Arabe},
    "3":{tituloHero: "Japonês", subtituloHero: "Sakura Sushi House", imagemHero:Japones},
    "4":{tituloHero: "Portugês", subtituloHero: "Cantinho Lusitano", imagemHero:Portugues},
    "5":{tituloHero: "Pizzaria", subtituloHero: "Piazza del Forno", imagemHero:Pizzaria},
    "6":{tituloHero: "Vegano", subtituloHero: "Jardim da Terra", imagemHero:Vegano},
  };

  const dados = restaurantesMap[id!] 
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
        <Massa style={{ backgroundImage: `url(${dados.imagemHero})` }}/>
        <MassaTitulo>{dados.tituloHero}
          <Massa2>
          {dados.subtituloHero}
          </Massa2>
        </MassaTitulo>
    </MassaWrapper>
      <MassaContainer>
    <CardPage2 />
    </MassaContainer>
</>
)
}

export default HeroPratos

function dispatch() {;
}
