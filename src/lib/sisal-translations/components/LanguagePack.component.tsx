import React, {useState} from 'react';
import TranslationsService from "../services/translations.service";
import LoadingPlaceholder from "../../../components/loading-placeholder/loading-placeholder.component";
const LanguagePack = (props: any) => {
    const {languagePack, children} = props;
    const [isInitialized, setIsInitialized] = useState(false);
    TranslationsService().init(languagePack).then(
        () => setIsInitialized(true)
    );

    return (
        <>
            {!isInitialized ?
                (<LoadingPlaceholder />)
                :

                (<>{children}</>)
            }
        </>
  );
};

export default LanguagePack;