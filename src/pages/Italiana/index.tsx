import { Bannerimage, BannerLogo, Cart, Massa, Massa2, MassaTitulo, Restaurant, } from "./styles";
import BannerFundo from "../../imagens/2page/Vector.png"
import logo from "../../imagens/logo.png"
import MassaImage from "../../imagens/2page/image.png"
import { GridContainer } from "./Card/styles";
import CardPage2 from "./Card";



const Italiana = () => (
  <div>
    <Bannerimage style={{ backgroundImage: `url(${BannerFundo})` }}>
      <Restaurant>Restaurantes</Restaurant>
      <BannerLogo src={logo} alt="Logo" />
      <Cart>0 produto(s) no carrinho</Cart>
    </Bannerimage>
    <Massa style={{ backgroundImage: `url(${MassaImage})` }}>
    <MassaTitulo>
      Italiana
    <Massa2>
      La Dolce Vita Trattoria
    </Massa2>
      </MassaTitulo>
    </Massa>
    <GridContainer>
    <CardPage2/>
    <CardPage2/>
    <CardPage2/>
    <CardPage2/>
    <CardPage2/>
    <CardPage2/>
    </GridContainer>
    
</div>

);


export default Italiana