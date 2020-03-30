
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
    let resources = {};
    switch (languagePackName) {
        case 'module':
            resources = {
                en: {translation:translationEN.module},
                it: {translation:translationIT.module}
            };
            break;
        default:
           resources = {
                en: {translation:translationEN.global},
                it: {translation:translationIT.global}
            };
            break;
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(resources);
        }, 800);
    });


};

export default mockFetchLanguagePack;