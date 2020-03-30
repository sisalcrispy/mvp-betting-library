const mutations = (state: any) => {
    const setT = (newvalue: any) => {
        return {t: newvalue}
    };
    const setOtherLanguage = (newvalue: any) => {
        return {otherLanguage: newvalue}
    };

    return {setT, setOtherLanguage};
};

export default mutations;