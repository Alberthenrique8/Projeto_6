import React, { useState } from "react";
import { Row, GropuCad, Wrapper, Cartao, DadosCard, Mes, Ano } from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";

type CheckoutProps = {
  onVoltar: () => void;
  onContinuarPagamento: (dados: { delivery: any; payment: any }) => Promise<any>;
};

const Checkout = ({ onVoltar, onContinuarPagamento }: CheckoutProps) => {
  const [step, setStep] = useState<"entrega" | "pagamento">("entrega");

  const formEntrega = useFormik({
    initialValues: {
      fullname: "",
      endereco: "",
      cidade: "",
      cep: "",
      complemento: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string().min(5, "Nome inválido").required("Campo obrigatório"),
      endereco: Yup.string().min(5, "Endereço inválido").required("Campo obrigatório"),
      cidade: Yup.string().min(2, "Cidade inválida").required("Campo obrigatório"),
      cep: Yup.string()
        .matches(/^\d{5}-?\d{3}$/, "CEP inválido")
        .required("Campo obrigatório"),
      complemento: Yup.string(),
    }),
    onSubmit: () => {},
  });

  const formPagamento = useFormik({
    initialValues: {
      name: "",
      card: "",
      cvv: "",
      month: "",
      year: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5, "Nome inválido").required("Campo obrigatório"),
      card: Yup.string().length(16, "Número do cartão deve ter 16 dígitos").required("Campo obrigatório"),
      cvv: Yup.string().length(3, "CVV deve ter 3 dígitos").required("Campo obrigatório"),
      month: Yup.string().length(2, "Mês deve ter 2 dígitos").required("Campo obrigatório"),
      year: Yup.string().length(4, "Ano deve ter 4 dígitos").required("Campo obrigatório"),
    }),
    onSubmit: async (values) => {
      const payload = {
        delivery: {
          ...formEntrega.values,
          cep: formEntrega.values.cep.replace(/\D/g, ""),
        },
        payment: {
          ...values,
          card: values.card.replace(/\D/g, ""),
          month: Number(values.month),
          year: Number(values.year),
        },
      };

      try {
        await onContinuarPagamento(payload);
      } catch (err: any) {
      }
    },
  });

  return (
    <>
      {step === "entrega" && (
        <form>
          <Wrapper>
            <h1>Entrega</h1>

            <label htmlFor="fullname">Quem irá receber</label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              value={formEntrega.values.fullname}
              onChange={formEntrega.handleChange}
              onBlur={formEntrega.handleBlur}
            />
            {formEntrega.touched.fullname && formEntrega.errors.fullname && <span>{formEntrega.errors.fullname}</span>}

            <label htmlFor="endereco">Endereço</label>
            <input
              id="endereco"
              name="endereco"
              type="text"
              value={formEntrega.values.endereco}
              onChange={formEntrega.handleChange}
              onBlur={formEntrega.handleBlur}
            />
            {formEntrega.touched.endereco && formEntrega.errors.endereco && <span>{formEntrega.errors.endereco}</span>}

            <label htmlFor="cidade">Cidade</label>
            <input
              id="cidade"
              name="cidade"
              type="text"
              value={formEntrega.values.cidade}
              onChange={formEntrega.handleChange}
              onBlur={formEntrega.handleBlur}
            />
            {formEntrega.touched.cidade && formEntrega.errors.cidade && <span>{formEntrega.errors.cidade}</span>}

            <Row>
              <GropuCad>
                <label htmlFor="cep">CEP</label>
                <input
                  id="cep"
                  name="cep"
                  type="text"
                  value={formEntrega.values.cep}
                  onChange={formEntrega.handleChange}
                  onBlur={formEntrega.handleBlur}
                />
                {formEntrega.touched.cep && formEntrega.errors.cep && <span>{formEntrega.errors.cep}</span>}
              </GropuCad>
            </Row>

            <label htmlFor="complemento">Complemento (opcional)</label>
            <input
              id="complemento"
              name="complemento"
              type="text"
              value={formEntrega.values.complemento}
              onChange={formEntrega.handleChange}
              onBlur={formEntrega.handleBlur}
            />

            <button
              type="button"
              onClick={async () => {
                const errors = await formEntrega.validateForm();

                if (Object.keys(errors).length === 0) {
                  setStep("pagamento");
                } else {
                  formEntrega.setTouched({
                    fullname: true,
                    endereco: true,
                    cidade: true,
                    cep: true,
                    complemento: true,
                  });
                }
              }}
            >
              Continuar para pagamento
            </button>

            <button type="button" onClick={onVoltar}>
              Voltar para o carrinho
            </button>
          </Wrapper>
        </form>
      )}

      {step === "pagamento" && (
        <form onSubmit={formPagamento.handleSubmit}>
          <Wrapper>
            <h1>Pagamento</h1>

            <label htmlFor="name">Nome no cartão</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formPagamento.values.name}
              onChange={formPagamento.handleChange}
              onBlur={formPagamento.handleBlur}
            />
            {formPagamento.touched.name && formPagamento.errors.name && <span>{formPagamento.errors.name}</span>}

            <Cartao>
              <DadosCard>
                <label htmlFor="card">Número do cartão</label>
                <input
                  id="card"
                  name="card"
                  type="text"
                  value={formPagamento.values.card}
                  onChange={formPagamento.handleChange}
                  onBlur={formPagamento.handleBlur}
                />
                {formPagamento.touched.card && formPagamento.errors.card && <span>{formPagamento.errors.card}</span>}
              </DadosCard>

              <DadosCard>
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  name="cvv"
                  type="password"
                  value={formPagamento.values.cvv}
                  onChange={formPagamento.handleChange}
                  onBlur={formPagamento.handleBlur}
                />
                {formPagamento.touched.cvv && formPagamento.errors.cvv && <span>{formPagamento.errors.cvv}</span>}
              </DadosCard>
            </Cartao>

            <Mes>
              <Ano>
                <label htmlFor="month">Mês de vencimento</label>
                <input
                  id="month"
                  name="month"
                  type="text"
                  placeholder="MM"
                  value={formPagamento.values.month}
                  onChange={formPagamento.handleChange}
                  onBlur={formPagamento.handleBlur}
                />
                {formPagamento.touched.month && formPagamento.errors.month && <span>{formPagamento.errors.month}</span>}
              </Ano>

              <Ano>
                <label htmlFor="year">Ano de vencimento</label>
                <input
                  id="year"
                  name="year"
                  type="text"
                  placeholder="AAAA"
                  value={formPagamento.values.year}
                  onChange={formPagamento.handleChange}
                  onBlur={formPagamento.handleBlur}
                />
                {formPagamento.touched.year && formPagamento.errors.year && <span>{formPagamento.errors.year}</span>}
              </Ano>
            </Mes>

            <button type="submit">Finalizar Pedido</button>

            <button
              type="button"
              onClick={() => {
                formPagamento.validateForm();
                setStep("entrega");
              }}
            >
              Voltar para entrega
            </button>
          </Wrapper>
        </form>
      )}
    </>
  );
};

export default Checkout;
