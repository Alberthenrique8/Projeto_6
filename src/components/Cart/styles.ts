import styled from "styled-components";

export const Overlay = styled.div`
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
position: absolute;

`
export const CartContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: none;
justify-content: flex-end;
z-index: 1;
    &.is-open {
        display: flex;
    }
`

export const SideBar = styled.aside`
background-color: #E66767;
z-index: 1;
width: 360px;
padding: 32px 8px 0 8px;
`

export const ButtonCart = styled.button`
cursor: pointer;
border: none;
font-size: 14px;
font-family: "Roboto", sans-serif;
font-weight: 700;
width: 344px;
height: 24px;
color: #E66767;
background-color: #FFEBD9;
margin-top: 16px;
`
export const Valor = styled.p`
list-style: none;
color: #FFEBD9;
font-family: "Roboto", sans-serif;
font-weight: 700;
font-size: 14px;
margin-top: 40px;
`

export const Preco = styled.p`
list-style: none;
color: #FFEBD9;
font-family: "Roboto", sans-serif;
font-weight: 700;
font-size: 14px;
font-weight: bold;
margin: -14px 280px 8px;
padding-right:8px ;
`

export const CartItem = styled.li`
        list-style: none;
    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin: 8px 8px 12px;
        position: absolute;
    }

    div {
        width: 344px;
        height: 100px;
        background-color: #FFEBD9;
        margin-bottom: 12px;
    }

    h3 {
        font-family: "Roboto", sans-serif;
        font-weight: 900;
        font-size: 16px;
        padding:6px 100px;
        white-space: nowrap;
        color: #E66767;
    }

    span {
        display: block;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 14px;
        padding:16px 100px;
        color: #E66767;
    }

    img.Lixeira {
        width: 16px;
        height: 16px;
        margin: -5px 320px ;
        cursor: pointer;
    }
`
export const Tituloconfima =styled.h1`
    font-size:16px;
    color: #FFEBD9;
    font-style: regular;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
`
export const SubtituloConfirma = styled.p`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #FFEBD9;
    font-size: 14px;
    margin-top: 5px;
`