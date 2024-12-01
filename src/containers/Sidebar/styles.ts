import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  padding: 8px;
  border: none;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 12px;
  font-weigth: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 0; /* Garante que o elemento fique colado no topo */
  margin-top: -80px; /* Compensa o padding-top do body */
  left: 0;
  background-color: ${(props) => props.theme.corDeFundoSidebar};
  height: calc(
    100vh + 80px
  ); /* Para ocupar toda a tela e o espaço compensado */
  width: 180px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
