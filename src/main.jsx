import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import './config/configI18next.js'
import 'animate.css'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './assets/css/global.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
