import React, {Context, useContext, useState} from 'react';
import InitializeContext from "./initialize-context.component";
import ContextInterface from "../interfaces/contextInterface.interface";

const ContextProvider = (props: { context: Context<ContextInterface>, children: any }) => {
    const {context, children} = props;
    const {Provider} = context;
    const {store} = useContext(context);
    const {initialState, mutations, actions} = store;

    const [state, setState] = useState(initialState);

    const commit = (commitName: string, payload?: object): void => {
        const newState = mutations(state)[commitName](payload);
        setState((previousState: any) => ({...previousState, ...newState}));
    };

    const dispatch = (actionName: string, payload?: object): Promise<any> => {
        return actions(commit)[actionName](payload);
    };




    return (
        <>
            <Provider value={{store, state, dispatch}}>

                    {children}

            </Provider>)
        </>
    );
};

export default ContextProvider;
