import './header.scss';
import { useTranslation } from "react-i18next";
import { BtnLenguajes } from "../btn-es-en/BtnLenguajes";

export const Header = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <div className="container position-relative">
      <header className="header">
        <div className="logo">{t("header.logo")}</div>

        <nav className="nav">
          <a href="#"> {t("header.navbar.Inicio")}</a>
          <a href="#"> {t("header.navbar.sobre mi")}</a>
          <a href="#"> {t("header.navbar.Habilidades")}</a>
          <a href="#"> {t("header.navbar.Proyectos")}</a>
          <a href="#"> {t("header.navbar.contactame")}</a>

          <button><i className="fa-solid fa-moon"></i></button>

          <BtnLenguajes name="Es" />
          <BtnLenguajes name="En" />
        </nav>
      </header>
    </div>
  );
};
