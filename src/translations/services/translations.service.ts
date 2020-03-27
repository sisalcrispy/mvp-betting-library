import * as React from 'react';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const translationEN = {
    global: {
        "back": "Back",
        "bet": "Bet",
        "this_is_the_bet": "This is the bet",
        "login": "Login",
        "index": "Index",
        "not_authorized": "Not Authorized",
        "just_admin": "Just admin",
        "cta": {
            "go_to_bet": "Go to bet",
            "switch_to": "Switch to",
            "go_to_admin_module": "Go to admin module"
        },
        "errors": {
            "provide_credentials": "Provide credentials"
        }
    },
    module: {
        "you_are_in_the_module": "You are in the module"
    }
};

const translationIT = {
    global: {
        "back": "Indietro",
        "bet": "Scommessa",
        "this_is_the_bet": "Questa è la scommessa",
        "login": "Login",
        "index": "Indice",
        "not_authorized": "Non autorizzato",
        "just_admin": "Solo admin",
        "cta": {
            "go_to_bet": "Vai alla scommessa",
            "switch_to": "Cambia a",
            "go_to_admin_module": "Vai al modulo admin"
        },
        "errors": {
            "provide_credentials": "Inserisci le credenziali"
        }
    },
    module: {
        "you_are_in_the_module": "Sei nel modulo"
    }
};


const mockFetchLanguagePack = (languagePackName: string): any => {
    switch (languagePackName) {
        case 'module':
            return {
                en: {translation:translationEN.module},
                it: {translation:translationIT.module}
            };
        default:
            return {
                en: {translation:translationEN.global},
                it: {translation:translationIT.global}
            };
    }
};


const TranslationsService = (languagePack: string) => {
    const translations = i18n;
    const init = (resources: any) => translations.use(initReactI18next).init({
            resources,
            lng: 'en',
            keySeparator: '.',
            interpolation: {
                escapeValue: false,
            },
        }, () => {});
    init(mockFetchLanguagePack(languagePack));

    const t = (stringCode: string): string => translations.t(stringCode);
    const otherLanguage = (): string => (translations.language === 'it' ? 'en' : 'it');

    const switchLanguage = (): void => {
        translations.changeLanguage(otherLanguage());
    };

    return {
        t, otherLanguage, switchLanguage,
    };
};


export default TranslationsService;
