import logo from '../../imagens/logo.png'
import footer from '../../imagens/Rectangle 2.png'
import { Descricao, FooterImage, Logo, SocialIcons, } from './styles'
import instagram  from '../../imagens/instagram.png'
import facebook  from '../../imagens/facebook.png'
import twitter  from '../../imagens/twitter.png'




const Footer = () => (
<FooterImage style={{ backgroundImage: `url(${footer})` }}>
    <Logo src={logo} alt="Logo" />
    <SocialIcons>
        <img src={instagram} alt='Instagram'/>
        <img src={facebook} alt='facebook'/>
        <img src={twitter} alt='twitter'/>
    </SocialIcons>
    <Descricao>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br /> dos produtos é toda do estabelecimento contratado. </Descricao> 
</FooterImage>
);

export default Footer