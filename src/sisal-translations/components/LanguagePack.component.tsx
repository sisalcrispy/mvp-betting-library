import React, {useState} from 'react';
import TranslationsService from "../services/translations.service";
const LanguagePack = (props: any) => {
    const {languagePack, children} = props;
    const [isInitialized, setIsInitialized] = useState(false);
    TranslationsService().init(languagePack).then(
        () => setIsInitialized(true)
    );

    return (
        <>
            {!isInitialized ?
                (<div>loading...</div>)
                :

                (<>{children}</>)
            }
        </>
  );
};

export default LanguagePack;