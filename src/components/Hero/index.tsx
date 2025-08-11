import { HeroImagem, Titulo, Logo,  } from "./styles"
import imagemFundo from '../../imagens/fundo.png'
import logo from '../../imagens/logo.png'

const Hero = () => (
  <HeroImagem style={{ backgroundImage: `url(${imagemFundo})` }}>
    
      <Logo src={logo} alt="Logo" />
    <Titulo>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Titulo>
    
  </HeroImagem>
  )

export default Hero
