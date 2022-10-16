import { useTranslation } from "react-i18next";

export const BtnLenguajes = ({ name }) => {
  const { t, i18n } = useTranslation("global");

  const onLenguaje = (name) => {
    if (name == "Es") {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return <button onClick={() => onLenguaje(name)}>{name}</button>;
};
