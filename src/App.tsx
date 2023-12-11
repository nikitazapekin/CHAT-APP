
import React from 'react';
import { useEffect } from 'react';
import './App.css';
import {userSlice} from "./store/reducers/UserSlice.ts";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import AppRoutes from './utils/routes.tsx';
import WebSock from './components/WebSocket/WebSocket.js';
function App() {
 const dispatch = useAppDispatch()

 
  let socketInstance; 
    return (
       <>
      <AppRoutes socketInstance={socketInstance} isAuthenticated={false} />
     
       </>

  );
}

export default App; 
