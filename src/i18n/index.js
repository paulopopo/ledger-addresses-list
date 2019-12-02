import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as en from './lang/en';
import * as fr from './lang/fr';

const resources = {
    en,
    fr,
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
