 /*
import './App.css';
import React from 'react';
function App() {
  return (
    <>
    
    </>
  );
}

export default App;
*/


import React from 'react';
import { useEffect } from 'react';
//import React, {useEffect} from 'react';
import './App.css';
import {userSlice} from "./store/reducers/UserSlice.ts";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import {fetchUsers} from "./store/reducers/ActionCreators.ts";
import RegisterPage from './pages/registerPage/registerPage.tsx';
import AppRoutes from './utils/routes.tsx';
import WebSock from './components/WebSocket/WebSocket.js';

//import PostContainer from "./components/PostContainer.tsx";
//import PostContainer2 from "./components/PostContainer2";

function App() {


  const {users, isLoading, error } = useAppSelector(state=>state.userReducer)
 
 
 const dispatch = useAppDispatch()
  useEffect(()=> {
    console.log(1111)
 //   fetchUsers()
dispatch(fetchUsers());
  }, [])
 
  let socketInstance; 
    return (
  
       <>
    

      <AppRoutes socketInstance={socketInstance} isAuthenticated={false} />
       </>

  );
}

export default App;