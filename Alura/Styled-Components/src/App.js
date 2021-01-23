import React , { useState } from "react";
import { ThemeProvider } from 'styled-components'

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from './Components/GlobalStyle';
import { BtnTema } from './Components/UI';
import SwitchTema from "./Components/SwitchTema";
import { temaClaro, temaEscuro } from './Components/UI/temas';

function App() {
  const [tema,setTema] = useState(true)

  function toggleTema(){
    setTema((tema)=> !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitchTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;