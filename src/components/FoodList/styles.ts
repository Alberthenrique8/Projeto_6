import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 40px; 
  padding: 0;
  list-style: none;
  max-width: 900px;
  width: 100%;
`
