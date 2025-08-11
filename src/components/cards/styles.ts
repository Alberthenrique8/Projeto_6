import styled from "styled-components";

export const Card = styled.li`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border: 1px solid rgba(230, 103, 103, 1);
  overflow: hidden;
  font-family: 'Inter', Arial, sans-serif;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 120px;
 `

export const ImageWrapper = styled.div`
  position: relative;
`

export const TagContainer = styled.div`
  position: absolute;
  top: 18px;
  right: 8px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: #E66767;
  color: #fff;
  padding: 4px 6px;
  font-size: 12px;
  border-radius: none;
`
export const Imagem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  
`

export const Conteudo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;
`

export const TituloNota = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #E66767;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-style: bold;
`

export const Nota = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #E66767;

  &::after {
    content: '⭐';
    margin-left: 4px;
    color: gold;
  }
`

export const Descricao = styled.p`
  font-weight: 400px;
  font-size: 14px;
  color: #E66767;
  line-height: 22px;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-style: regular;
`;

