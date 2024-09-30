import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkBotao } from './styles'

interface ProjetoProps {
  titulo: string
  descricao: string
  link: string
}

const Projeto: React.FC<ProjetoProps> = ({ titulo, descricao, link }) => (
  <Card>
    <Title>{titulo}</Title>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    <LinkBotao as="a" href={link} target="_blank" rel="noopener noreferrer">
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
