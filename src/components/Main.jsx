import { useEffect } from "react";
import "../styles/Main.css";
import fotoPerfil from "../assets/Foto de perfil/IMG_20250128_101442_950.jpg";
import curriculo from "../assets/Profile.pdf";
import { scrollReveal } from "../scrollReveal";

const linksSociais = [
  {
    url: "https://github.com/richardcustodio",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    alt: "GitHub",
  },
  {
    url: "https://www.linkedin.com/in/richard-custodio-batista-quadra-279391312/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    alt: "LinkedIn",
  },
];

function Foto() {
  return (
    <section className="foto reveal">
      <div className="foto-container">
        <img
          src={fotoPerfil}
          alt="Foto de Richard Custodio"
          className="foto-perfil"
        />
      </div>
    </section>
  );
}

function Introducao() {
  return (
    <section className="intro reveal">
      <h1 className="intro-titulo">Richard Custodio</h1>
      <p className="intro-texto">
        Olá! Me chamo Richard Custodio e estou começando minha jornada no
        desenvolvimento Front-End. Tenho estudado tecnologias essenciais como
        HTML, CSS e JavaScript para criar interfaces modernas, funcionais e
        responsivas. Cada dia é uma nova oportunidade para aprender e colocar em
        prática o que estudo, buscando sempre evoluir e adquirir mais
        experiência na área.
      </p>
      <p className="intro-texto">
        Meu objetivo é me tornar um desenvolvedor Front-End profissional e criar
        projetos que ofereçam experiências incríveis para os usuários. Estou
        aberto a desafios, colaborações e novas oportunidades que me ajudem a
        crescer nesse caminho. Vamos construir algo juntos?
      </p>
      <div className="links-container">
        <LinksSociais />
        <BotaoCurriculo /> {/* Botão agora dentro da mesma seção dos ícones */}
      </div>
    </section>
  );
}

function LinksSociais() {
  return (
    <div className="links reveal">
      {linksSociais.map(({ url, icon, alt }) => (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          key={alt}
          aria-label={`Acesse meu perfil no ${alt}`}
        >
          <img src={icon} alt={alt} className="icon" />
        </a>
      ))}
    </div>
  );
}

function BotaoCurriculo() {
  return (
    <div className="curriculo-container reveal">
      <a
        href={curriculo}
        download="Curriculo_Richard_Custodio.pdf"
        className="botao-curriculo"
      >
        Baixar Currículo
      </a>
    </div>
  );
}

export default function Main() {
  useEffect(() => {
    scrollReveal();
  }, []);

  return (
    <main className="main">
      <Foto />
      <Introducao />
    </main>
  );
}
