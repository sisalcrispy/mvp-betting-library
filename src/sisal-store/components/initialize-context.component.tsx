import React, {useContext, useState} from "react";


const InitializeContext = (props: any) => {
    console.log('vengo reinizializato');
    const {children, context} = props;
    const {store} = useContext(context);
    const [isInitialized, setIsInitialized] = useState(false);
    const [tmpState, setTmpState] = useState({});

    const fixed = 1;


    const commit = (commitName: string, payload? : any) => {
        const newState = store.mutations(tmpState)[commitName](payload);
        console.log(newState);
       // setTmpState((previousState: any) => ({...previousState, ...newState}));
    };

    store.actions(commit).init();


    return (
        <>
            {!isInitialized
                    ? (<p>Loading...</p>)
                    : (<>{children}</>)
            }
        </>
    );
};

export default InitializeContext;