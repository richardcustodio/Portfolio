import "../styles/Contato.css";
import phoneIcon from "../assets/Contatos/phone_iphone_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png";
import emailIcon from "../assets/Contatos/mail_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png";
import whatsappIcon from "../assets/Contatos/whatsapp.png";

const Contato = () => {
  return (
    <section id="contato" className="contato reveal">
      {" "}
      {/* Adicionando a classe reveal */}
      <h2>Contato</h2>
      <div className="contato-container">
        {/* Telefone */}
        <article className="contato-item reveal">
          {" "}
          {/* Adicionando a classe reveal */}
          <div className="contato-icone">
            <img src={phoneIcon} alt="Ícone de telefone" />
          </div>
          <p className="contato-tipo">Telefone</p>
          <p className="contato-info">(27) 99788-8270</p>
        </article>

        {/* E-mail */}
        <article className="contato-item reveal">
          {" "}
          {/* Adicionando a classe reveal */}
          <div className="contato-icone">
            <img src={emailIcon} alt="Ícone de E-mail" />
          </div>
          <p className="contato-tipo">E-mail</p>
          <p className="contato-info">rc.custodio@outlook.com</p>
        </article>

        {/* WhatsApp */}
        <a href="https://wa.me/5527997888270" className="contato-item reveal">
          {" "}
          {/* Adicionando a classe reveal */}
          <div className="contato-icone">
            <img src={whatsappIcon} alt="Ícone de WhatsApp" />
          </div>
          <p className="contato-tipo">WhatsApp</p>
          <p className="contato-info">(27) 997888270</p>
        </a>
      </div>
    </section>
  );
};

export default Contato;
