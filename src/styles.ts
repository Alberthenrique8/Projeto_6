import { createGlobalStyle } from 'styled-components'

const cores = {
  branco: '#FFFFFF',
  coral: '#E66767',
  bege: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  

  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${cores.bege};
  }
`
