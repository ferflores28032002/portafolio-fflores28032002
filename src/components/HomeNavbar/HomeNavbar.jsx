import React from "react";
import "./HomeNavbar.scss";
import { useTranslation } from "react-i18next";
import img from "../../assets/imgs/perfil.png";
import { Typewriter } from "react-simple-typewriter";

export const HomeNavbar = () => {
  const { t } = useTranslation("global");

  return (
    <div className={"row container"} id="contenedor">

      <div className="col-md-1">

        <div className="d-flex flex-column" id="info">
          <a
            id="github"
            className="animate__animated animate__bounce animate__fadeInLeft"
            href="https://github.com/ferflores28032002"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            className="animate__animated animate__bounce animate__fadeInLeft"
            href="#"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            id="whatsap"
            className="animate__animated animate__bounce animate__fadeInLeft"
            href="#"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

      </div>

      <div className="col-md-6">

        <h3 className="animate__animated animate__bounce animate__fadeInDown">
          {t("header.logo.0")}
          <span className="ps-2" id="typewriter">
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[t("header.logo.1"), t("header.logo.2")]}
            ></Typewriter>
          </span>
        </h3>

        <h5 className="pt-2 animate__animated animate__bounce animate__fadeInDown">
          {t("info.xp")}
        </h5>

        <p className="pt-2 animate__animated animate__bounce animate__fadeInDown">
          {t("info.des")}
        </p>

        <button className="btn-cv">
          {t("info.btn")}
          <i className="ps-2 fa-solid fa-download"></i>
        </button>
      </div>

      <div className="col-md-5">
        <div className="caja-imgs  animate__animated animate__bounce animate__fadeInRight">
          <img src={img} alt="img-presentacion" />
        </div>
      </div>

    </div>
  );
};
