import {
  Card,
  Conteudo,
  Descricao,
  Imagem,
  Titulo,
  Nota,
  TituloNota,
  ImageWrapper,
  TagContainer,
  Tag
} from './styles'

import sushi from '../../imagens/sushi.png'
import massa from '../../imagens/massa.png'
import Button from '../button'

const Sushis = () => (
  <Card>
    <ImageWrapper>
      <Imagem src={sushi} alt="Sushi" />
      <TagContainer>
        <Tag>Destaque da semana</Tag>
        <Tag>Japonesa</Tag>
      </TagContainer>
    </ImageWrapper>
    <Conteudo>
      <TituloNota>
        <Titulo>Hioki Sushi</Titulo>
        <Nota>4.9</Nota>
      </TituloNota>
      <Descricao>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!
      </Descricao>
      <Button type="link" title="Saiba mais">Saiba Mais</Button>
    </Conteudo>
  </Card>
)

const Massas = () => (
  <Card>
    <ImageWrapper>
      <Imagem src={massa} alt="Massa" />
      <TagContainer>
        <Tag>Italiana</Tag>
      </TagContainer>
    </ImageWrapper>
    <Conteudo>
      <TituloNota>
        <Titulo>La Dolce Vita Trattoria</Titulo>
        <Nota>4.6</Nota>
      </TituloNota>
      <Descricao>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!
      </Descricao>
      <Button type="link" to="/Teste" title="Saiba mais">Saiba Mais</Button>
    </Conteudo>
  </Card>
)

export { Sushis, Massas }
