import styled from "styled-components";

export const Overlay = styled.div`
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
z-index: 100%;
position: fixed;
display: flex;
justify-content: center;
`

export const ConteudoModal = styled.div`
margin-right: 390px;
justify-content: flex-start;
`
export const ModalBox = styled.div`
width: 1205px;
height: 344px;
display: flex;
margin-top: 350px;
margin-left: 40px;
background-color: #E66767;
`
export const ImagemModal = styled.img`
width: 350px;
height: 340px;
padding: 32px;
object-fit: cover;
position: absolute;
`
export const Close =styled.img`
position: absolute;
margin-left: 1182px;
padding-top: 8px;
cursor: pointer;
`

export const TituloModal = styled.h1`
font-size: 18px;
font-family: "Roboto", sans-serif;
font-weight: 900;
color: #ffffff;
margin-left: 365px;
margin-top: 29px;
`
export const DescricaoModal = styled.p`
font-size: 14px;
font-family: "Roboto", sans-serif;
font-weight: 400;
color: #ffffff;
line-height: 22px;
margin-left: 365px;
margin-top: 16px;
`
export const PorcaoModal = styled.h2`
width: 330px;
color: #ffff;
font-size: 14px;
font-family: "Roboto", sans-serif;
font-weight: 400;
margin-left: 365px;
margin-top: 32px;
`

export const BotaoModal = styled.button`
font-size: 14px;
font-family: "Roboto", sans-serif;
font-weight: 700;
color: #E66767;
background-color: #FFEBD9;
width: 218px;
height: 24px;
border-radius: none;
border: none;
cursor: pointer;
margin-left: 365px;
margin-top: 16px;
`