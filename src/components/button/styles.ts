import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
font-family: 'Inter', sans-serif;
  background-color: #e97676;
  color: #FFEBD9;
  font-weight: bold;
  border: none;
  border-radius: 0;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 4px 6px;
  width: 100px;
  height: 24px;
  display: block;
  text-align: center;
  text-decoration: none;
  margin-top: auto;
  align-self: start;
  &:hover {
    background-color: #d46666;
  }
`;

export const ButtonLink = styled(Link)`
  font-family: 'Inter', sans-serif;
  background-color: #e97676;
  color: #FFEBD9;
  font-weight: bold;
  border: none;
  border-radius: 0;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 4px 6px;
  width: 100px;
  height: 24px;
  display: block;
  text-align: center;
  text-decoration: none;
  margin-top: auto;
  align-self: start;
  &:hover {
    background-color: #d46666;
  }
`;

