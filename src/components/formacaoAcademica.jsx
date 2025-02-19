import "../styles/formacaoAcademica.css";

// Dados dos certificados
const certificadosData = [
  {
    titulo: "Oracle Next Education F2 T7 Front-end",
    periodo: "12 de junho de 2024 - 22 de janeiro de 2025",
    cursos: [
      {
        titulo: "Formação: Front End - 88h",
        descricao:
          "Exploração de HTML semântico e acessibilidade, aprofundamento em CSS para layouts responsivos e Flexbox. Desenvolvimento dinâmico com JavaScript, manipulando o DOM, consumindo APIs e criando interações. Uso de IA no desenvolvimento com GitHub Copilot e ChatGPT. Aplicação prática com desafios como um portfólio e o projeto AluraGeek.",
      },
      {
        titulo: "Formação: React G7 ONE - 81h",
        descricao:
          "Criação de aplicações interativas com React, compreendendo componentes, roteamento com React Router, gerenciamento de estado com Context API e estilização com Styled Components. Implementação de boas práticas e desafios práticos, como o AluraFlix.",
      },
      {
        titulo: "Formação: Iniciante em Programação - 72h",
        descricao:
          "Introdução aos fundamentos da programação com JavaScript, abordando lógica, funções e listas. Aprendizado de HTML e CSS para estruturar e estilizar páginas, incluindo conceitos como Flexbox, variáveis CSS e responsividade. Uso do Git e GitHub para versionamento e colaboração. Aplicação prática por meio do desafio de um decodificador de texto.",
      },
      {
        titulo: "Formação: Desenvolvimento Pessoal - 38h",
        descricao:
          "Aprimoramento de habilidades para organização e produtividade, incluindo técnicas de aprendizado, foco e criação de hábitos. Uso do LinkedIn para fortalecimento do networking e posicionamento profissional.",
      },
      {
        titulo:
          "Formação: Empreendedorismo, Agilidade e Protagonismo na Carreira - 46h",
        descricao:
          "Exploração do mercado de trabalho, propósito profissional e transição de carreira para tecnologia. Aplicação de metodologias ágeis e desenvolvimento de uma mentalidade empreendedora para impulsionar a carreira.",
      },
    ],
  },
  {
    titulo: "Programador de sistemas",
    periodo: "11 de março de 2024 - 29 de maio de 2024",
    cursos: [
      {
        titulo: "Noções de Empreendedorismo - 8h",
        descricao:
          "Conceitos básicos sobre empreendedorismo, incluindo planejamento, inovação e gestão de negócios.",
      },
      {
        titulo: "Noções de Direito do Consumidor com Foco no Procon - 8h",
        descricao:
          "Princípios do direito do consumidor, direitos e deveres, e o papel do Procon na proteção ao consumidor.",
      },
      {
        titulo: "Lógica de Programação - 40h",
        descricao:
          "Fundamentos da lógica computacional, incluindo algoritmos, estruturas condicionais e repetição.",
      },
      {
        titulo: "Programação Desktop - 144h",
        descricao:
          "Desenvolvimento de aplicações para computadores, explorando linguagens e frameworks voltados para softwares de desktop.",
      },
    ],
    imagem: "../src/assets/Certificados/programador_sistemas.png", // Caminho da imagem
  },
];

const formacaoAcademica = () => {
  const abrirCertificado = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="formacao" className="formacao reveal">
      <h2 className="secao-titulo">Formação acadêmica</h2>
      {certificadosData.map((certificado, index) => (
        <section key={index} className="secao-certificados reveal">
          <h3 className="secao-titulo">{certificado.titulo}</h3>
          <h4 className="secao-subtitulo">{certificado.periodo}</h4>
          {certificado.cursos.map((curso, idx) => (
            <div key={idx} className="categoria-certificado">
              <h4>{curso.titulo}</h4>
              <p>{curso.descricao}</p>
            </div>
          ))}

          {/* Condicional para exibir o botão "Acesse meus certificados" apenas para o curso "Oracle Next Education F2 T7 Front-end" */}
          {certificado.titulo === "Oracle Next Education F2 T7 Front-end" && (
            <div className="link-certificados">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="certificado-link"
              >
                Acesse meus certificados
              </a>
            </div>
          )}

          {/* Condicional para exibir o botão "Visualizar Certificado" apenas para o curso "Programador de sistemas" */}
          {certificado.titulo === "Programador de sistemas" &&
            certificado.imagem && (
              <div className="link-certificados">
                <button
                  onClick={() => abrirCertificado(certificado.imagem)}
                  className="certificado-botao"
                >
                  Visualizar Certificado
                </button>
              </div>
            )}
        </section>
      ))}
    </section>
  );
};

export default formacaoAcademica;
