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
  Tag,
  GridContainer,

} from './styles'
import Button from '../button'

 type Cardapio = {
    cardapio: any;
    foto: string;
    preco?: number;
    id: number;
    nome: string;
    destacado: string;
    porcao: string;
    descricao: string;
    restauranteDescricao?: string;
}

type Restaurante =  {
    rotas: string | undefined;
    id:number;
    titulo:string
    tipo:string;
    avaliacao:number;
    descricao:string;
    capa:string;
};



type Props = {
  restaurante:Restaurante
}

const ExportRestaurante = ({restaurante}: Props) => (
    <GridContainer>
      <Card>
    <ImageWrapper>
      <Imagem src={restaurante.capa} alt="" />
      <TagContainer>
        <Tag>{restaurante.tipo}</Tag>
      </TagContainer>
    </ImageWrapper>
    <Conteudo>
      <TituloNota>
        <Titulo>{restaurante.titulo}</Titulo>
        <Nota>{restaurante.avaliacao.toFixed(1)}</Nota>
      </TituloNota>
      <Descricao>
        {restaurante.descricao}
      </Descricao>
      <Button type="link" to={`/restaurante/${restaurante.id}`} title="Saiba mais">Saiba Mais</Button>
    </Conteudo>
  </Card>
  </GridContainer>

)
export { ExportRestaurante, type Restaurante };
