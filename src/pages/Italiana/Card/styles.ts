import styled from "styled-components";


export const MassaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;     
  row-gap: 32px;        
  max-width: 100%;
  padding: 56px 430px;
  justify-items: center;
  list-style: none;

`;

export const CardMassa = styled.li`
  list-style: none;
  width: 100%;
  max-width: 320px;
  height: 338px;
  background-color: #E66767;
  display: grid;
  padding: 8px;
  box-sizing: border-box;
  
`;

export const ImageMassa = styled.img`
  width: 100%;
  max-width: 304px;
    
`;

export const TituloCard = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 16px;
  font-style: normal;
  color: #ffebd9;
  text-align: left;
  width: 100%;
`;

export const DescricaoCard = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  color: #ffebd9;
  text-align: left;
  width: 100%;
`;

export const BotaoCard = styled.button`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
  width: 304px;
  height: 24px;
  border-radius: 0%;
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;
