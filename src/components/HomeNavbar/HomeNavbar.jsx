import React from "react";
import "./HomeNavbar.scss";
import { useTranslation } from "react-i18next";

export const HomeNavbar = () => {
  const { t } = useTranslation("global");

  return (
    <div className={"row container"} id="contenedor">
      <div className="col-md-2">
        <div className="d-flex flex-column" id="info">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>

      <div className="col-md-5">
        <h3>{t("info.name")}</h3>
        <h5 className="pt-2">{t("info.xp")}</h5>

        <p className="pt-2">{t("info.des")}</p>

        <button className="btn-cv">
          {t("info.btn")}
          <i class="ps-2 fa-solid fa-download"></i>
        </button>
      </div>

      <div className="col-md-5"></div>
    </div>
  );
};
