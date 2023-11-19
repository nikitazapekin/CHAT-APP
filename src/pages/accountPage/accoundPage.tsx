import React from "react";
import Navigation from "../../components/navigation/navigation.tsx";
import WebSock from "../../components/WebSocket/WebSocket.js";
import { switchVisibilityOfPanel } from "../../store/reducers/ActionCreators.ts";
import { setCurrentUsername } from "../../store/reducers/ActionCreators.ts";
import { useParams } from "react-router-dom";
import { useState, useEffect  } from "react";
import { useAppDispatch } from "../../hooks/redux.ts";
const AccountPage = ({socketInstance}: any) => {
    const {id}= useParams()
    console.log("ACCOUNT PAGE"+id)
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(switchVisibilityOfPanel(true));
        if(typeof id == "string"){
            dispatch(setCurrentUsername(id));

        }
    //dispatch(switchVisibilityOfPanel)
      }, [])
    return ( 
<>
<Navigation />



<WebSock  />

 
</>

     );
}
 
export default AccountPage;