import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./multi-lenguajes/en/global.json";
import global_es from "./multi-lenguajes/es/global.json";
import "./assets/css/styles.css";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
