import styled, { createGlobalStyle } from 'styled-components' //acesso a estilização do DOM

import { theme } from './themes/dark'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: "Gowun Batang", serif;
  list-style: none;
}

html, body {
    height: 100%;
  }

body {
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${(props) => (props.theme as theme).corDeFundo};

  @media (max-width: 768px) {
    padding-top: 16px;
  }
}
`

export default EstiloGlobal

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 80px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
