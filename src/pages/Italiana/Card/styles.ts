import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 32px;
    max-width: 1024px;
    margin: 40px auto;
    padding:0 20px ;
`
export const CardMassa = styled.li`
    list-style: none;
    background-color: #E66767;
    border-radius: 0px;
    width: 100%;
    max-width: 320px;
    min-height: 338px;
    padding: 16px;
    gap: 32px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    `
export const ImageMassa = styled.img`
    width: 100%;
    max-width: 304px;
    height: auto;
    object-fit: contain;
`
export const TituloCard = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 17px;
    font-style: black;
    color: #FFEBD9;
    margin-top: -18px;
    text-align: left;
    width: 100%;
`;
export const DescricaoCard = styled.p`
    font-family:' Roboto', sans-serif;
    font-size: 400;
    font-size: 15px;
    font-style: regular;
    color: #FFEBD9;
    text-align: left;
    width: 100%;
    margin-top: -20px;
`
export const BotaoCard = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-style: bold;
    max-width: 304px;
    width: 100%;
    height: 24px;
    border-radius: 0%;
    background-color: #FFEBD9;
    color: #E66767;
    margin-top: -18px;
    border: none;
    font-size: 14px;
    cursor: pointer
`

