import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`
export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 16px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  transition: background-color 0.3s, color 0.3s; /* Adiciona transição suave */

  &:hover {
    background-color: #dfe6e9; /* Cor no hover */
    color: purple;
    font-weight: bold; /* Cor do texto no hover */
  }
`
