import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BtnLenguajes } from "../btn-es-en/BtnLenguajes";
import "./header.scss";

export const Header = () => {
  const { t } = useTranslation("global");
  const [toggle, settoggle] = useState(false);

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("movimiento", window.scrollY > 0);
    header.classList.toggle("shadow-lg", window.scrollY > 0);
  });

  return (
    <header className="header">
      <a href="#" className="logo">
        {t("header.logo.1")}
      </a>

      <nav className="nav">
        <section className={"nav"} id={!toggle ? "menu-responsive" : "menu"}>
          <a href="#"> {t("header.navbar.Inicio")}</a>
          <a href="#"> {t("header.navbar.sobre mi")}</a>
          <a href="#"> {t("header.navbar.Habilidades")}</a>
          <a href="#"> {t("header.navbar.Proyectos")}</a>
          <a href="#"> {t("header.navbar.contactame")}</a>
        </section>

        <button>
          <i className="fa-solid fa-moon"></i>
        </button>

        <BtnLenguajes name="Es" />
        <BtnLenguajes name="En" />

        <button className="d-none boton" onClick={() => settoggle(!toggle)}>
          {!toggle ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i class="fa-solid fa-xmark animate__animated animate__bounce animate__rotateIn"></i>
          )}
        </button>
      </nav>
    </header>
  );
};
