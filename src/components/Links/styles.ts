import styled from 'styled-components'

export const SocialLinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80px; /* Ajuste a largura máxima do link */
  width: 100%;
  margin: 0 10px; /* Espaçamento entre os ícones */

  img {
    transition: all ease 0.3s;

    &:hover {
      transform: scale(1.3);
    }
  }
`
