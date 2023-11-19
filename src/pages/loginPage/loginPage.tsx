
import React from "react";
import Navigation from "../../components/navigation/navigation.tsx";
import LoginBox from "../../components/loginBox/loginBox.tsx";
const LoginPage = ({socketInstance}: any) => {
    return ( 
        <>
        <Navigation />
        <LoginBox />
        </>
     );
}
 
export default LoginPage;