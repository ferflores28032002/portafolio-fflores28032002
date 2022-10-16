import i18next from "i18next";
import global_en from '../multi-lenguajes/en/global.json'
import  global_es from '../multi-lenguajes/es/global.json'


export default  i18next.init({
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
  