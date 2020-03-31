import React, {useEffect, useState} from 'react';
import TranslationsService from "../services/translations.service";
import LoadingPlaceholder from "../../../components/loading-placeholder/loading-placeholder.component";

const LanguagePack = (props: any) => {
    const {languagePack, language, children} = props;
    const [isInitialized, setIsInitialized] = useState(false);

    if (TranslationsService().currentLanguage() !== undefined && (TranslationsService().currentLanguage() !== language)) {
        TranslationsService().switchLanguage();
    } else {
        TranslationsService().init(languagePack, language).then(
            () => {
                setIsInitialized(true);
            });
    }

    return (
        <>
            {!isInitialized ?
                (<LoadingPlaceholder/>)
                :
                (<>{children}</>)
            }
        </>
    );
};

export default LanguagePack;