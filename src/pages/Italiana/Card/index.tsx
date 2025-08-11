import { BotaoCard, CardMassa, DescricaoCard, ImageMassa, MassaContainer, TituloCard, } from "./styles";
import fechar from "../../../imagens/2page/fechar.png";
import { ReactNode, useEffect, useState } from "react";
import { BotaoModal, Close, DescricaoModal, ImagemModal, ModalBox, Overlay, TituloModal,ConteudoModal, PorcaoModal } from "../../../components/Modal/styled";
import { useGetPratoQuery } from '../../../services/api'
import { useDispatch } from "react-redux";
import { add, open } from "../../../store/reducers/cart";

export type Cardapio = {
    foto:string;
    preco?:number;
    id:number;
    nome:string;
    destacado:string;
    porcao:string;
    descricao:string;
    restauranteDescricao?:string;
}

 type Restaurante =  {
    foto: ReactNode;
    id:number;
    titulo:string
    tipo:string;
    avaliacao:number;
    descricao:string;
    capa:string;
    cardapio:Cardapio[];
};

export const formataPreco = (preco:number) => {
    return new Intl.NumberFormat('pt-BR',{
        style:'currency',
        currency:'BRL'
    }).format(preco)
}

 const CardPage2 = () => {
const { data, isLoading } = useGetPratoQuery()
const [isOpen, setIsOpen] = useState(false);
const [restaurante, setRestaurante] = useState<Restaurante[]>([]);
const [modalItem , setModalItem] = useState<Restaurante| null>(null);



useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
        .then(response => response.json())
        .then(data =>
            setRestaurante(data)
        );
},[])

const dispatch = useDispatch()
const addToCart  = (item: Cardapio) => {
    dispatch(add(item))
    dispatch(open())
}

return (
<MassaContainer>
    {restaurante.map((item)=>(
    <CardMassa key={item.id}>
    <ImageMassa src={item.capa} alt={"Pizza"} />
    <TituloCard>{item.titulo}</TituloCard>
    <DescricaoCard>
    {item.descricao}
    </DescricaoCard>
    <BotaoCard onClick={() => {setModalItem(item) ; setIsOpen(true)}}>Adicionar ao carrinho</BotaoCard>
    </CardMassa>
    ))}
{isOpen && modalItem && (
<Overlay>
    <ModalBox>
    <Close src={fechar} alt="Fechar" onClick={() => setIsOpen(false)} />
{modalItem.cardapio.slice(0,1).map((item) => (
<ConteudoModal key={item.id}>
    <ImagemModal src={item.foto} alt={item.nome} />
    <TituloModal>{item.nome}</TituloModal>
    <DescricaoModal>{item.descricao}</DescricaoModal>
    <PorcaoModal>{item.porcao}</PorcaoModal>
        <BotaoModal onClick={() =>{addToCart(item)}}>
        Adicionar ao carrinho {formataPreco(item.preco ?? 0)}
        </BotaoModal>
</ConteudoModal>
))}
</ModalBox>
</Overlay>
)}
</MassaContainer>
);
};

export default CardPage2;
