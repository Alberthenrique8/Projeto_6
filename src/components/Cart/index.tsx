import { useState } from "react";
import { ButtonCart, CartItem, Preco, SubtituloConfirma, Tituloconfima, Valor } from "./styles";
import { CartContainer, Overlay, SideBar } from "./styles";
import Lixo from "../../imagens/2page/c2510f15841e4855c13cfe444448798eeb37c734.png";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import { formataPreco } from "../../pages/Pratos/Card";
import Checkout from "../../pages/checkout";
import { usePurchaseMutation, type CompraApi } from "../../services/api";
import { data } from "react-router-dom";

const CartGlobalCorrigido = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  const [purchase] = usePurchaseMutation();
  const [step, setStep] = useState<"cart" | "checkout" | "sucesso">("cart");
  const [loading, setLoading] = useState(false);
  const [pedidoId, setPedidoId] = useState<number | null>(null);

  const closeCart = () => {
    dispatch(close());
    setStep("cart");
  };

  const getPrecoTotal = () =>
    items.reduce((acc, item) => acc + (item.preco ?? 0), 0);

  const removerItem = (id: number) => {
    dispatch(remove(id));
  };

  const handleFinalizarCompra = async (delivery: any, payment: any, ) => {
    const dadosCompra: CompraApi = {
      products: items.map((item) => ({ id: item.id, price: item.preco ?? 0 })),
      delivery: {
        receiver: delivery.fullname,
        address: {
          description: delivery.endereco,
          city: delivery.cidade,
          zipCode: delivery.cep,
          number: delivery.numero,
          complement: delivery.complemento,
        },
      },
      payment: {
        card: {
          name: payment.name,
          number: payment.card,
          code: payment.cvv,
          expires: { month: payment.month, year: payment.year },
        },
      },
      unwrap: function (): unknown {
        throw new Error("Function not implemented.");
      }
    };

    try {
      const result = await purchase(dadosCompra).unwrap();
      setPedidoId(result.orderId);
      setStep("sucesso")
    } catch (err) {
      console.error("Erro ao finalizar compra", err);
      alert("Erro ao processar o pedido!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {step === "cart" && (
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <div>
                  <img src={item.foto} alt={item.nome} />
                  <h3>{item.nome}</h3>
                  <span>{formataPreco(item.preco ?? 0)}</span>
                  <img
                    onClick={() => removerItem(item.id)}
                    className="Lixeira"
                    src={Lixo}
                    alt="Remover"
                  />
                </div>
              </CartItem>
            ))}
            <Valor>Valor total</Valor>
            <Preco>{formataPreco(getPrecoTotal())}</Preco>
            <ButtonCart type="button" onClick={() => setStep("checkout")}>
              Continuar com a entrega
            </ButtonCart>
          </ul>
        )}
        {step === "checkout" && (
          <Checkout
            onVoltar={() => setStep("cart")}
            onContinuarPagamento={(dados) =>
              handleFinalizarCompra(dados.delivery, dados.payment,)
            }
          />
        )}
        {step === "sucesso" && (
          <>
            <Tituloconfima>Pedido realizado {pedidoId}</Tituloconfima>
            <SubtituloConfirma>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              Nossos entregadores não estão autorizados a realizar cobranças extras.
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </SubtituloConfirma>
            <ButtonCart type="button" onClick={closeCart}>
              Concluir
            </ButtonCart>
          </>
        )}
        {loading && <p>Processando pagamento...</p>}
      </SideBar>
    </CartContainer>
  );
};

export default CartGlobalCorrigido;
