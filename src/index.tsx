/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 */


//import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import {Provider} from "react-redux";
import {setupStore} from "./store/store.ts";

const store = setupStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);