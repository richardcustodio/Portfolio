import "../styles/Projetos.css";
import PropTypes from "prop-types"; // Importando PropTypes

// Importação dinâmica das imagens na pasta "Projetos"
const imagens = import.meta.glob("../assets/Projetos/*.{png,PNG}", {
  eager: true,
});

/**
 * Componente que exibe um cartão de projeto.
 */
const ProjetoCard = ({ titulo, descricao, link, imagem, alt }) => {
  return (
    <div className="projeto-card reveal">
      {" "}
      {/* Adicionando a classe reveal */}
      <h3 className="projeto-titulo">{titulo}</h3>
      <div className="container-projeto">
        <div className="projeto-texto">
          <p className="projeto-descricao">{descricao}</p>
          <p className="projeto-mensagem">
            Clique no botão abaixo para visualizar o projeto completo no GitHub.
          </p>
          <a
            href={link}
            className="projeto-botao"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver detalhes do projeto: ${titulo}`}
          >
            Ver Projeto
          </a>
        </div>
        <div className="imagem-container">
          {imagem ? (
            <img src={imagem} alt={alt} className="projeto-imagem" />
          ) : (
            <p className="erro-imagem">Imagem não encontrada</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Validação das propriedades esperadas
ProjetoCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imagem: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

// Lista de projetos
const projetos = [
  {
    titulo: "Decodificador de Texto - Cifra de César",
    descricao:
      "Este projeto é uma ferramenta interativa que permite codificar e decodificar mensagens utilizando a Cifra de César.",
    link: "https://github.com/richardcustodio/Decofidificador-de-texto",
    imagem:
      imagens["../assets/Projetos/Decodificador-de-texto.PNG"]?.default || null,
    alt: "Imagem do projeto Decodificador de Texto",
  },
  {
    titulo: "Laço e Nô",
    descricao:
      "Este projeto foi desenvolvido com o objetivo de praticar e consolidar conceitos fundamentais de CRUD.",
    link: "https://github.com/richardcustodio/Bow-and-Knot",
    imagem: imagens["../assets/Projetos/Laco_No.PNG"]?.default || null,
    alt: "Imagem do projeto Laço e Nô",
  },
];

/**
 * Componente principal que exibe a seção de projetos.
 */
const Projetos = () => {
  return (
    <section id="projetos" className="projetos reveal">
      {" "}
      {/* Adicionando a classe reveal */}
      <h2 className="secao-titulo">Projetos</h2>
      {projetos.map((projeto) => (
        <ProjetoCard key={projeto.titulo} {...projeto} />
      ))}
    </section>
  );
};

export default Projetos;
