import {BotaoCard, CardMassa , DescricaoCard, ImageMassa,TituloCard } from "./styles";
import pizza from "../../../imagens/2page/pizza.png"

const CardPage2 = () => {

    return (
        <CardMassa>
            <ImageMassa src={pizza} alt="Pizza"/>
                <TituloCard>
                    Pizza Marguerita
                </TituloCard>
                <DescricaoCard>
                    A clássica Marguerita: molho de tomate <br /> suculento, mussarela derretida, manjericão <br /> fresco e um toque de azeite. Sabor e simplicidade!
                </DescricaoCard>
                <BotaoCard>Adicionar ao carrinho</BotaoCard>
        </CardMassa>
)
};

export default CardPage2