import styled from "styled-components";

export const Bannerimage = styled.div`
  width: 100%;
  height: 186px;
  background-color: #FFEBD9;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 64px;
  position: relative;
`;

export const BannerLogo = styled.img`
  width: 125px;
  height: 57.7px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Restaurant = styled.h1`
  margin-left: 305px;
  color: #E66767;
  font-size: 18px;
  white-space: nowrap;

`;

export const BotaoCart = styled.h2`
  margin-right: 268px;
  color: #E66767;
  font-size: 18px;
  white-space: nowrap;
  cursor: pointer;
`;

export const Massa = styled.div`
  width:100%;
  height: 300px;
  background-size: cover;     
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  overflow: hidden;
  filter: brightness(50%);
`;

export const MassaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const MassaTitulo = styled.h3`
  position: absolute;
  top: 25px;
  left: 367px;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 100;
  color: #cccc;
`;

export const Massa2 = styled.h3`
  position: absolute;
  top: 80px; 
  white-space:nowrap;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  color: #ffffff;
  margin-top: 135px;
  font-style: black;
`;