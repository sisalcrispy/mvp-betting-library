import * as React from 'react';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import mockFetchLanguagePack from "./mock-backend";

const TranslationsService = () => {
    const translations = i18n;
    const init = (languagePack: string) => {
       return mockFetchLanguagePack(languagePack).then((resources:any) => {
           translations.use(initReactI18next).init({
                resources,
                lng: 'en',
                keySeparator: '.',
                interpolation: {
                    escapeValue: false,
                },
            }, () => {
            });
            return Promise.resolve(true);
        });

    };

    const t = (stringCode: string): string => translations.t(stringCode);
    const otherLanguage = (): string => (translations.language === 'it' ? 'en' : 'it');

    const switchLanguage = (): void => {
        translations.changeLanguage(otherLanguage());
    };

    return {
       init, t, otherLanguage, switchLanguage,
    };
};


export default TranslationsService;
