import styled from "styled-components";

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns:repeat(1,1fr) ;
`

export const Card = styled.li`
  background-color: #ffffffff;
  border-top: none;
  border-radius: none;
  display: flex;
  flex-direction: column;
  min-height: 180px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  border: none;
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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
  margin-left: auto;
  margin-top: -4px;
  border: 1px solid #e66767;
  border-top: none;
  padding: 8px;
  box-sizing: border-box; 
  border-radius: 0px;
`;


export const TituloNota = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #E66767;
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
  font-family: 'Roboto', sans-serif;
  font-style: regular;
`;

