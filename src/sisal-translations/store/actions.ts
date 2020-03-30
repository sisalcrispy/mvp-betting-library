import TranslationsService from "../services/translations.service";
const {init, t, switchLanguage, otherLanguage } = TranslationsService();

const actions =  (commit: (commitName: string, payload?: any) => void) => {

    const initTranslations = (languagePack: string) => {
        init(languagePack);
        commit('setT', t);
        commit('setOtherLanguage', otherLanguage);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Promise A win!');
            }, 800);
        });
    };

    const internalSwitchLanguage = () => {
        switchLanguage();
        commit('setT', t);
        commit('setOtherLanguage', otherLanguage);
        return Promise.resolve(true);
    };

    return {initTranslations, switchLanguage: internalSwitchLanguage};
};

export default actions;