import "../styles/SobreMim.css";

const SobreMimTexto = () => (
  <>
    <p>
      Meu interesse pela tecnologia começou cedo, movido pela curiosidade. Desde
      criança, meu pai e a navegação pela internet despertaram em mim um
      fascínio pelo mundo digital. Mesmo com as limitações da internet naquela
      época, cada descoberta era emocionante e me fazia querer entender mais
      sobre como tudo aquilo funcionava.
    </p>
    <p>
      Porém, foi apenas no ensino médio técnico que meu contato com a tecnologia
      se tornou mais real e estruturado. Durante essa fase, comecei a explorar
      mais a área de TI e a entender as diferentes possibilidades: Backend,
      Frontend e Fullstack.
    </p>
    <p>
      No final do ensino médio, decidi me aprofundar no assunto, buscando mais
      informações sobre cada área e descobrindo qual delas realmente combinava
      comigo. Depois de conhecer melhor as possibilidades, percebi que meu
      caminho seria o desenvolvimento Frontend.
    </p>
    <p>
      Desde então, venho focando em aprender e crescer dentro dessa área,
      buscando oportunidades para expandir meu conhecimento e adquirir novas
      habilidades. Ainda que meu foco principal seja o Frontend, estou sempre
      aberto a aprender mais sobre outras áreas da tecnologia para me tornar um
      profissional completo e capaz de enfrentar novos desafios.
    </p>
  </>
);

const SobreMim = () => {
  return (
    <section id="sobre-mim" className="sobre-mim reveal">
      {" "}
      {/* Adicionando a classe reveal */}
      <h2 className="secao-titulo" aria-label="Sobre Mim">
        Sobre Mim
      </h2>
      <div className="secao-texto" aria-describedby="descricao-sobre-mim">
        <SobreMimTexto />
      </div>
    </section>
  );
};

export default SobreMim;
