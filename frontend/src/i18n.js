// frontend/src/i18n.js

// This file initializes the i18next library with the resources for each language.
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// It loads the translation files for English, Finnish, Japanese, and Arabic.
import en from './locales/en.json';
import fi from './locales/fi.json';
import jp from './locales/jp.json';
import ar from './locales/ar.json';

// Initialize i18next with the resources for each language.
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fi: { translation: fi },
      jp: { translation: jp },
      ar: { translation: ar },
    },
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
