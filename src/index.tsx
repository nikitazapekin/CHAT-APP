
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import {Provider} from "react-redux";
import {setupStore} from "./store/store.ts";
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import WebSock from './components/WebSocket/WebSocket.js';
const store = setupStore();

ReactDOM.render(
      <BrowserRouter>
    <Provider store={store}>
    
        <App />
     
    </Provider>
      </BrowserRouter>,
  document.getElementById('root')
);