import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Contato from "./components/Contato";
import FormacaoAcademica from "./components/formacaoAcademica";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/Projetos";
import SobreMim from "./components/SobreMim";
import { scrollReveal } from "./scrollReveal"; // Importa a função de animação
import "./styles/global.css"; // Estilos globais

function App() {
  useEffect(() => {
    scrollReveal(); // Chama a função de animação quando a página for carregada
  }, []);

  return (
    <>
      <Header />
      <Main />
      <SobreMim />
      <FormacaoAcademica />
      <Habilidades />
      <Projetos />
      <Contato />
    </>
  );
}

export default App;
