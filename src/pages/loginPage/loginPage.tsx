
import React from "react";
import Navigation from "../../components/navigation/navigation.tsx";
import LoginBox from "../../components/loginBox/loginBox.tsx";
import Toast from "../../components/toast/toast.tsx";
import WebSock from "../../components/WebSocket/WebSocket.js";
import Tel from "../../asserts/t.png"
const LoginPage = ({socketInstance}: any) => {
    return ( 
        <>
        <Navigation />
        <LoginBox />
      
        <img src={Tel}  style={{width: "400px", height: "400px"}}/>
        </>
     );
}
 
export default LoginPage;