import styled from "styled-components"

export const FooterImage = styled.div `
width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #FFEBD9; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  margin-top: 120px;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.7px;
  position: absolute;
  top: 40px;
  margin-bottom: 32.5px;
`
export const SocialIcons = styled.div`
display: flex;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 130px;
  gap: 8px;
  margin-right: 60px;
`
export const Descricao = styled.p`
font-family: Roboto;
font-size: 10px;
color: #E66767;
margin-top: 80px;
line-height: 100%;
`