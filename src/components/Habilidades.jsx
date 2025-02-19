import "../styles/Habilidades.css";

// Importação direta das imagens para evitar problemas de caminho
import htmlIcon from "../assets/Habilidades/html5.png";
import cssIcon from "../assets/Habilidades/css3.png";
import jsIcon from "../assets/Habilidades/js.png";
import reactIcon from "../assets/Habilidades/science.png"; // Ícone de React

// Array com as habilidades para evitar repetição de código
const habilidades = [
  { nome: "HTML", icone: htmlIcon, nivel: 40 },
  { nome: "CSS3", icone: cssIcon, nivel: 35 },
  { nome: "JavaScript", icone: jsIcon, nivel: 27 },
  { nome: "React.js", icone: reactIcon, nivel: 19 },
];

const Habilidades = () => {
  return (
    <section id="habilidades" className="habilidades reveal">
      <h2 className="secao-titulo">Habilidades</h2>
      <div className="lista-habilidades">
        {habilidades.map((habilidade, index) => (
          <div key={index} className="habilidade-item reveal">
            <div className="habilidade-nome">
              <img
                src={habilidade.icone}
                alt={habilidade.nome}
                className="habilidade-icone"
              />
              <span>{habilidade.nome}</span>
            </div>
            <div className="barra-progresso">
              <div
                className="nivel"
                style={{ width: `${habilidade.nivel}%` }}
                data-nivel={`${habilidade.nivel}%`}
                role="progressbar"
                aria-valuenow={habilidade.nivel}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
