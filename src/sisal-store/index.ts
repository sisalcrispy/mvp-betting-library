import {Context, createContext as reactCreateContext, useState} from "react";
import ContextProvider from "./components/context-provider.component";

const Store = <StateInterface>() => {

    const createStore = (store: any) => {

        const createContext = (): Context<any> => {
            return returnContext(store);
        };

        const returnContext = (_store: any) => {
            const dispatch = (s:string) => {};
            return reactCreateContext<any>({state:_store.initialState, dispatch, store:_store});
        } ;

        const addToContext = <NewInitialState>(newInitialState: NewInitialState, newMutations: any, newActions: any ) => {
            const initialState = {...store.initialState, ...newInitialState};
            const mutations = (state: any) => ({...store.mutations(state), ...newMutations(state)});
            const actions = (commit: (commitName: string, payload?: any) => void) => ({...store.actions(commit), ...newActions(commit)});

            const _store = {initialState, mutations, actions};
            return returnContext(_store);
        };

        return {createContext, addToContext};
    };


    return {ContextProvider, createStore};
};


export default Store;