export default interface DefaultContextInterface {
    state: object;
    dispatch: (s: string) => void;
    store: {initialState: any, actions: any, mutations: any}
}
