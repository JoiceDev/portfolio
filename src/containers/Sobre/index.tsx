import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Desenvolvedora apaixonada por tecnologia e por criar soluções inovadoras.
      Tenho experiência com projetos pessoais e acadêmicos, focando em melhorar
      minhas habilidades em JavaScript, Typescript, React e Java, por exemplo.
      No meu portfólio, você encontrará projetos que refletem meu compromisso
      com o aprendizado contínuo e minha dedicação à excelência técnica.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=JoiceDev&show_icons=true&theme=dracula&include_all_commits=true&count_private=false" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=JoiceDev&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
