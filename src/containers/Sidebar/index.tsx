import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Joice Gonçalves</Title>
      <Paragrafo tipo="secundario" font-size={16}>
        JoiceDev
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheira front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
