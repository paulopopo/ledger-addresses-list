import React from 'react';
import { useTranslation } from 'react-i18next';

export default Component => props => {
    const { t, i18n } = useTranslation();
    return <Component {...props} t={t} i18n={i18n} />;
};
