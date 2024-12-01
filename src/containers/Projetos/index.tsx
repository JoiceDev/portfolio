import Projeto from '../../components/Projeto'
import Title from '../../components/Title'
import { Lista } from './styles'

const projetos = [
  // {
  //   titulo: '',
  //   descricao: '',
  //   link: ''
  // },
  {
    titulo: 'Efood',
    descricao:
      'Desenvolvimento de aplicação TSX com React e TypeScript, estilização dinâmica com Styled Components, gerenciamento de estado com Redux Toolkit e RTK Query, manutenção de código com ESLint e Prettier, e foco em design responsivo e experiência do usuário, incluindo integração de modais e carrinho com atualizações em tempo real.',
    link: 'https://efood-by-joicedev.vercel.app/'
  },
  {
    titulo: 'Harry Potter Landing Page',
    descricao:
      'Harry Potter Landing Page, uma aplicação web imersiva para fãs da série, com funcionalidades como o Chapéu Seletor, carrossel de imagens e integração com APIs. Utiliza JavaScript para interatividade e SASS para otimização de estilos.',
    link: 'https://joices-harry-potter-page.vercel.app/'
  },
  {
    titulo: 'Calculadora VueJS',
    descricao:
      'Uma calculadora simples construída com Vue.js, que realiza operações matemáticas básicas em tempo real e resultados dinâmicos.',
    link: 'https://calculadora-vue-by-joicedev.vercel.app/'
  },
  {
    titulo: 'Disney Plus Clone',
    descricao:
      'Página web inspirada no Disney+, com estilização em SASS, interatividade com JavaScript, automação de tarefas realizada utilizando Gulp, com pacotes como gulp-sass, gulp-imagemin e gulp-uglify, otimizando o processo de build, incluindo o processamento de estilos, scripts e imagens.',
    link: 'https://clone-disneyplus-byjoicedev.vercel.app/'
  },
  {
    titulo: 'Tasty Bistrô',
    descricao:
      'Site responsivo desenvolvido com Bootstrap, incluindo navegação, carrossel de imagens, abas, formulário de contato e integração com redes sociais. Utilização do sistema de grid do Bootstrap, jQuery e suas classes e plugins',
    link: 'https://tasty-bistro-bs.vercel.app/'
  },
  {
    titulo: 'Contagem Regressiva',
    descricao:
      'Landing page com contagem regressiva em JavaScript, estilização em SASS e animações com AOS.',
    link: 'https://countdown-birthday-joicedev.vercel.app/'
  },
  {
    titulo: 'Task List',
    descricao:
      'Aplicativo de lista de tarefas em HTML, CSS e JavaScript, com funcionalidades de adicionar, excluir e marcar tarefas, responsivo e utilizando ícones do FontAwesome.',
    link: 'https://task-list-gamma-two.vercel.app/'
  },
  {
    titulo: 'Contact Registration',
    descricao: '',
    link: 'https://contact-registration-byjoice.vercel.app/'
  },
  {
    titulo: 'Nature Blog',
    descricao:
      'Projeto desenvolvido com HTML5, CSS3 e Bootstrap para design responsivo, JavaScript para interatividade e carrossel de imagens, incluindo exibição de cards informativos com imagens e descrições breves.',
    link: 'https://nature-blog-bootstrap-avancado.vercel.app/'
  },
  {
    titulo: 'Games Shop',
    descricao: '',
    link: 'https://site-gamesshop-sepia-six.vercel.app/'
  },
  {
    titulo: 'Calculadora de Médias',
    descricao:
      'Calculadora de médias de atividades em HTML, CSS e JavaScript, permitindo inserção de notas, cálculo da média final e indicação de aprovação com status visual e textual. Inclui validação de entradas e atualização dinâmica de tabela.',
    link: 'https://calculadora-de-medias-js.vercel.app/'
  },
  {
    titulo: 'Photo Gallery',
    descricao:
      'A galeria de fotos permite adicionar novas imagens via URL, exibindo miniaturas com links para visualização em tamanho real. Utiliza jQuery e CSS para interação e estilo.',
    link: 'https://photo-gallery-byjoicedev.vercel.app/'
  },
  {
    titulo: 'Puppies Store',
    descricao:
      'Projeto desenvolvido com HTML5, CSS3, Media Queries, Flexbox e Positioning, apresentando uma loja fictícia de produtos para animais, com menu interativo, página de promoções e formulário de contato com ícones de redes sociais.',
    link: 'https://site-petshop-by-joicedev.vercel.app/'
  },
  {
    titulo: 'Portal de Notícias',
    descricao:
      'Um portal de notícias simples, desenvolvido com HTML e CSS, onde são apresentadas notícias divididas em seções: Esportes, Economia, Política e Entretenimento. Cada seção possui uma lista de artigos com título, descrição e data de publicação, além de imagens ilustrativas.',
    link: 'https://portal-de-noticias-steel.vercel.app/'
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
