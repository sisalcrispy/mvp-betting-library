# MVP nuovo terminale betting - Libreria condivisa

### Descrizione:

La libreria esporta tutti i componenti, gli stili e i servizi che saranno condivisi tra vari moduli e container.

Le risorse esportate possono essere scss, componenti react o normali moduli javascript.
Il build della libreria generà quindi un modulo pubblicato come pacchetto npm e reimportabile da altri progetti.

La libreria inoltre ha un suo ambiente di sviluppo (npm run start), con dev-server configurato e loader webpack.

### Come includerlo:
Per includere la libreria in un progetto esterno è sufficiente:

````npm install sisal-mvp-betting-library````

Quindi, in qualunque punto del codice si può importare come:

``import Sisal from 'sisal-mvp-betting-library';``

Quindi eseguire il pacchetto come un normale modulo javascript. Per esempio nel caso dello store:

 ``const {createStore} = Sisal.Store();``


###Specifiche tecniche:
- React: 16.13.0
- Hooks: attivi
- Linguaggio: Typescript
- Linter: Airbnb
- Test: Jest + Enzyme (non del tutto funzionanti, ma configurati)



###Contenuti:
Il modulo al momento esporta due librerie:
- Sisal.Store()
- Sisal.Translations()

e un componente
- LoadingPlaceholder

#### Store Manager:
I vari moduli hanno bisogno di uno store per passarsi variabili e funzioni globali.

Le funzionalità dello store si trovano dentro 
``
src/lib/sisal-store`` e sono accessibili all'esterno attraverso il già citato:

 ``const {createStore} = Sisal.Store();``
 
 Lo store è un oggetto formato da da:

- initialState: un oggetto con le proprietà dello stato e i loro valori iniziali.
```
initialState = {
    myVar: false,
    yourVar: 'unchanged'
};
```
- actions: 
```
const actions =  (commit: (commitName: string, payload?: any) => void) => {
    const example = () => {
        // do something 
        // (e.g. call a service, fetch somethigin from backend, etc...)
        //    
        commit('toggleMyVar');
    }

    const secondExample = () => {
            // do something, and call commit with payload
            commit('changeYourVar', 'changed');
    }
    return {example, secondExample};
};
```

- mutations:

```
const mutations = (state: any) => {
    const toggleMyVar = () => {
        return {myVar: state.!myVar};
    };

    const changeYourVar = (newValue: string) => {
        return {yourVar: newValue};
    };

    return {toggleMyVar, changeYourVar};
};
```

Per utilizzare lo store e averlo a disposizione dentro il context, Sisal.Store() espone il metodo 

`Sisal.Store().CreateStore({initialState, mutations, actions})`

che a sua volta ha due metodi:
- CreateContext(), che ritorna un context.
- AddToContext(initialState, mutations, actions), per aggiungere elementi allo store.

#### Context Manager:

La gestione del context è compito di questa libreria.
Dopo aver creato un context con i metodi detti sopra, la libreria fornisce un wrapper (``ContextProvider``) dentro cui va racchiusa tutta l'applicazione.

Quindi da qualunque punto del codice, si richiama il context con l'hook nativo di react ``useContext`` che ritornerà lo stato, lo store e un metodo ``dispatch`` per eseguire le actions dello store.

Per esempio, utilizzando lo store detto sopra,

```
import context from 'path/to/context';
    
const myReactComponent = () => {
    const {store, state, dispatch} = useContext(context);
    console.log(state.myVar); // return false;
    dispatch('example');
    console.log(state.myVar); // return true;
    
    // do something else...
}
```

#### Translations

Le funzionalità della libreria si trovano dentro 
``
src/lib/sisal-translations`` e sono accessibili all'esterno attraverso:

 ``const {TranslationsService} = Sisal.Translations();``
 
 Ogni modulo, quando parte, esegue l'init del servizio di traduzione e scarica (attualmente usa un servizio mock che restituisce dei json), il suo language pack per la relativa lingua. 
 
 I metodi di TranslationsService sono già contenuti dentro lo store di qualunque modulo (e del container) e vi si accede tramite:
 ```
    const {state} = useContext(context);
    const {t, otherLanguage, switchLanguage, currentLanguage} = state;
 ```

Nello specifico:
- t (s: string) => string, ritorna la traduzione data una chiave
- otherLanguage() e currentLanguage() ritornano rispettivamente la lingua non usata (in questa poc sono solo due) e la lingua corrente
- switchLanguage() inverte le lingue

#### Stili
La libreria esporta anche degli stili globali. 

Questi sono scss globali o file di configurazione (variabili, color, ecc).
Sono accessibili attraverso:

Tutti gli stili:
```
@import '~sisal-mvp-betting-library/dist/styles/config';

```
Solo le configurazioni:
```
@import '~sisal-mvp-betting-library/dist/styles/config';
```

#### Componenti
La libreria esporta dei componenti "condivisi."

Al moment c'è solo "LoadingPlaceholder" un component che mostra uno slider di caricamento.
In seguito qui potranno essere contenuti Input comuni, buttons o altri elementi UI condivisi.
 