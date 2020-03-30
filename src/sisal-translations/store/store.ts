import actions from "./actions";
import mutations from "./mutations";
import TranslationsService from "../services/translations.service";


const {t, otherLanguage} = TranslationsService();

const initialState = {
    t,
    otherLanguage
};


const store = {initialState, mutations, actions};

export default store;
