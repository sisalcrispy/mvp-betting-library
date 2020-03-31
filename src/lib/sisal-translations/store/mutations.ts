const mutations = (state: any) => {
    const setT = (newT: any) => {
        return {t: newT}
    };
    const setOtherLanguage = (newLanguage: any) => {
        return {otherLanguage: newLanguage}
    };
    const setCurrentLanguage = (newLanguage: any) => {
        return {currentLanguage: newLanguage}
    };

    return {setT, setOtherLanguage, setCurrentLanguage};
};

export default mutations;