import { link } from 'fs'
import Projeto from '../../components/Projeto'
import Title from '../../components/Title'
import { Lista } from './styles'

const projetos = [
  {
    titulo: 'Lista de Tarefas VueJS',
    descricao: '',
    link: 'https://vue-to-do-one.vercel.app/'
  },
  {
    titulo: 'Disney Plus Clone',
    descricao: '',
    link: 'https://clone-disneyplus-byjoicedev.vercel.app/'
  },
  {
    titulo: 'Tasty Bistrô',
    descricao: '',
    link: 'https://tasty-bistro-bs.vercel.app/'
  },
  {
    titulo: 'Contagem Regressiva',
    descricao: '',
    link: 'https://countdown-birthday-joicedev.vercel.app/'
  },
  {
    titulo: 'Task List',
    descricao: '',
    link: 'https://task-list-gamma-two.vercel.app/'
  },
  {
    titulo: 'Contact Registration',
    descricao: '',
    link: 'https://contact-registration-byjoice.vercel.app/'
  },
  {
    titulo: 'Nature Blog',
    descricao: '',
    link: 'https://nature-blog-bootstrap-avancado.vercel.app/'
  },
  {
    titulo: 'Games Shop',
    descricao: '',
    link: 'https://site-gamesshop-sepia-six.vercel.app/'
  },
  {
    titulo: 'Calculadora de Médias',
    descricao: '',
    link: 'https://calculadora-de-medias-opal-nine.vercel.app/'
  },
  {
    titulo: 'Photo Gallery',
    descricao: '',
    link: 'https://photo-gallery-byjoicedev.vercel.app/'
  },
  {
    titulo: 'Puppies store',
    descricao: '',
    link: 'https://site-petshop-css-responsivo-jpohh2dgx-joices-projects-fd57fa26.vercel.app/'
  }
]

const Projetos = () => (
  <section>
    <Title fontSize={16}>Projetos</Title>
    <Lista>
      {projetos.map((projeto, index) => (
        <li key={index}>
          <Projeto
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link}
          />
        </li>
      ))}
    </Lista>
  </section>
)

export default Projetos
