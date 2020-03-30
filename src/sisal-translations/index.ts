import TranslationsService from "./services/translations.service";
import store from "./store/store";
import LanguagePack from "./components/LanguagePack.component";

const Translations = () => {
    return {TranslationsService, store, LanguagePack };
};

export default Translations;