import {Context, createContext as reactCreateContext} from "react";
import ContextProvider from "./components/context-provider.component";

const Store = <StateInterface>() => {

    const createStore = (store: any) => {
        const createContext = (): Context<any> => {
            const dispatch = (s:string) => {};
            return reactCreateContext<any>({state:store.initialState, dispatch, store});
        };

        return {createContext};
    };


    return {ContextProvider, createStore};
};


export default Store;