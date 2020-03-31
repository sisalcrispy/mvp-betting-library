import './styles/main';
import SisalStore from "./lib/sisal-store";
import SisalTranslations from "./lib/sisal-translations";

import LoadingPlaceholder from "./components/loading-placeholder/loading-placeholder.component";


export const libraries = {
  Store: SisalStore,
  Translations: SisalTranslations,
  LoadingPlaceholder
};

export default libraries;

