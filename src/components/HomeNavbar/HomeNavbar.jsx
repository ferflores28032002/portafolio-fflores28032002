import React from "react";
import "./HomeNavbar.scss";
import { useTranslation } from "react-i18next";
import img from "../../assets/imgs/perfil.png";

export const HomeNavbar = () => {
  const { t } = useTranslation("global");

  return (
    <div className={"row container"} id="contenedor">
      <div className="col-md-2">
        <div className="d-flex flex-column" id="info">
          <a href="https://github.com/ferflores28032002">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <div className="col-md-5">
        <h3>{t("info.name")}</h3>
        <h5 className="pt-2">{t("info.xp")}</h5>

        <p className="pt-2">{t("info.des")}</p>

        <button className="btn-cv">
          {t("info.btn")}
          <i className="ps-2 fa-solid fa-download"></i>
        </button>
      </div>

      <div className="col-md-5">
        <div className="caja-imgs">
          <img src={img} alt="img-presentacion" />
        </div>
      </div>
    </div>
  );
};
