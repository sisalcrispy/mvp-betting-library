import TranslationsService from "../services/translations.service";
const {t, currentLanguage, switchLanguage, otherLanguage } = TranslationsService();

const actions =  (commit: (commitName: string, payload?: any) => void) => {

    const changeLanguage = () => {
        switchLanguage();
        commit('setT', t);
        commit('setOtherLanguage', otherLanguage);
        commit('setCurrentLangugage', currentLanguage);
        return Promise.resolve(true);
    };

    return {switchLanguage: changeLanguage};
};

export default actions;