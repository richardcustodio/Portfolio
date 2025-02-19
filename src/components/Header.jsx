import { useState, useCallback, useEffect } from "react";
import "../styles/Header.css";
import menuIcon from "../assets/menu.png";
import closeIcon from "../assets/close.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Atualiza o estado de `isMobile` ao redimensionar a tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Alterna a abertura do menu
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="header reveal">
      <div className="logo">Richard Custodio</div>
      {/* Botão de menu só aparece em telas menores */}
      {isMobile && (
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <img
            src={menuOpen ? closeIcon : menuIcon}
            alt={menuOpen ? "Fechar menu" : "Abrir menu"}
          />
        </button>
      )}
      {/* Menu de navegação */}
      <nav className={`menu ${menuOpen || !isMobile ? "open" : ""}`}>
        <ul className="nav-links">
          {[
            { href: "#sobre-mim", text: "Sobre Mim" },
            { href: "#formacao", text: "Formação" },
            { href: "#projetos", text: "Projetos" },
            { href: "#habilidades", text: "Habilidades" },
            { href: "#contato", text: "Contato" },
          ].map((item) => (
            <li key={item.href}>
              <a href={item.href} aria-label={item.text}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
