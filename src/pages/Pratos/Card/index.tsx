import { BotaoCard, CardMassa, DescricaoCard, ImageMassa, MassaContainer, TituloCard } from "./styles";
import fechar from "../../../imagens/2page/fechar.png";
import { useEffect, useState } from "react";
import { BotaoModal, Close, DescricaoModal, ImagemModal, ModalBox, Overlay, TituloModal, ConteudoModal, PorcaoModal } from "../../../components/Modal/styled";
import { useDispatch } from "react-redux";
import { add, open } from "../../../store/reducers/cart";
import { useParams } from "react-router-dom";

export type Cardapio = {
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

type Restaurante = {
    foto: string;
    id: number;
    titulo: string;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: Cardapio[];
};

export const formataPreco = (preco: number) => {
return new Intl.NumberFormat('pt-BR', {
style: 'currency',
currency: 'BRL'
}).format(preco);
}

const CardPage2 = () => {
const {id} = useParams<{id: string }> ();
const [isOpen, setIsOpen] = useState(false);
const [restaurante, setRestaurante] = useState<Restaurante[]>([]);
const [modalItem, setModalItem] = useState<Cardapio | null>(null);
const restauranteSelecionado = restaurante.find(r => r.id   === Number(id) );
const pratos = restauranteSelecionado?.cardapio || [] ;

useEffect(() => {
fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
.then(response => response.json())
.then(data =>
setRestaurante(data)
);
}, [id])

const dispatch = useDispatch()
const addToCart = (item: Cardapio) => {
dispatch(add(item))
dispatch(open())
}

return (
<MassaContainer>
{pratos.map (pratos =>(
<CardMassa key={pratos.id}>
<ImageMassa src={pratos.foto} alt={"Pizza"} />
<TituloCard>{pratos.nome}</TituloCard>
<DescricaoCard>
{pratos.descricao}
</DescricaoCard>
<BotaoCard onClick={() => { setModalItem(pratos); setIsOpen(true); }}>Adicionar ao carrinho</BotaoCard>
</CardMassa>
))}

{isOpen && modalItem && (
<Overlay>
<ModalBox>
<Close src={fechar} alt="Fechar" onClick={() => setIsOpen(false)} />
<ConteudoModal>
<ImagemModal src={modalItem.foto} alt={modalItem.nome} />
<TituloModal>{modalItem.nome}</TituloModal>
<DescricaoModal>{modalItem.descricao}</DescricaoModal>
<PorcaoModal>{modalItem.porcao}</PorcaoModal>
<BotaoModal onClick={() => { addToCart(modalItem); setIsOpen(false); }}>
Adicionar ao carrinho {formataPreco(modalItem.preco ?? 0)}
</BotaoModal>
</ConteudoModal>
</ModalBox>
</Overlay>
)}
</MassaContainer>
);
};

export default CardPage2;
