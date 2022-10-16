import { useTranslation } from "react-i18next";


export const App = () => {
  const { t, i18n } = useTranslation("global");

  return (
    <div className="container p-4 shadow-lg mt-4">
      <h1 className="mb-5">{t("logo")}</h1>

      <h4>{t("title")}</h4>
      <hr />
      <div className="mt-5">
        <button
          onClick={() => i18n.changeLanguage("es")}
          className="btn btn-primary me-3"
        >
          ESPAÑOL
        </button>
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="btn btn-danger"
        >
          ENGLISH
        </button>
      </div>
    </div>
  );
};
