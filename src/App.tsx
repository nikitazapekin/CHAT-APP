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
/* const dispatch = useAppDispatch()
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)
   
     useEffect(() => {
         dispatch(fetchUsers())
     }, [ ])
 */
    return (
    <div className="App">
        {/*{isLoading && <h1>Идет загрузка...</h1>}*/}
        {/*{error && <h1>{error}</h1>}*/}
        {/*{JSON.stringify(users, null, 2)}*/}
        <div style={{display: 'flex'}}>
          ыыыыыыыыыыыыыыы
        </div>
    </div>
  );
}

export default App;