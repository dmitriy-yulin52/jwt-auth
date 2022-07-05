import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from "./store/store";
import {create} from "domain";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

interface StoreInterface {
    store: Store
}

const store = new Store();

console.log(store,'store')

export const Context = createContext<StoreInterface>({
    store
})

root.render(
    <Context.Provider value={{
        store
    }}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Context.Provider>
);
