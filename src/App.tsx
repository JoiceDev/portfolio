import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLigth from './themes/ligth'
import temaDark from './themes/dark'
import { useState } from 'react'
import SocialLinks from './components/Links'

function App() {
  const [usandoTemaDark, setUsandoTemaDark] = useState(false)

  function trocaTema() {
    setUsandoTemaDark(!usandoTemaDark)
  }

  return (
    <ThemeProvider theme={usandoTemaDark ? temaDark : temaLigth}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <SocialLinks />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
