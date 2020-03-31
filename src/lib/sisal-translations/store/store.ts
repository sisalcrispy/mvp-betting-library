import actions from "./actions";
import mutations from "./mutations";
import TranslationsService from "../services/translations.service";


const {t, otherLanguage, currentLanguage} = TranslationsService();

const initialState = {
    t,
    otherLanguage,
    currentLanguage
};


const store = {initialState, mutations, actions};

export default store;
