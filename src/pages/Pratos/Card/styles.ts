import styled from "styled-components"

export const MassaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 32px;
  max-width: 100%;
  margin: 56px 185px;
  justify-items: center;
  list-style: none;
`

export const CardMassa = styled.li`
  list-style: none;
  width: 390px;
  background-color: #E66767;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
  box-sizing: border-box;
  border-radius: none;
  height: 100%;
`

export const ImageMassa = styled.img`
  width: 100%;
  height: 230px;
  border-radius: none;
  padding: auto;
  margin-bottom: 12px;
`

export const TituloCard = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 16px;
  color: #ffebd9;
  text-align: left;
  margin-top: 5px;
`

export const DescricaoCard = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #ffebd9;
  line-height: 1.5;
  margin: 8px 0;
`

export const BotaoCard = styled.button`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
  height: 32px;
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  border-radius: 0;
  cursor: pointer;
  margin-top: auto;
`
