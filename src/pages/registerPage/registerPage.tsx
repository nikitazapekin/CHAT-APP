
import React from "react";
import Navigation from "../../components/navigation/navigation.tsx";
import RegisterBox from "../../components/registerBox/registerBox.js";
import Toast from "../../components/toast/toast.tsx";
const RegisterPage = ({socketInstance}: any) => {
    return (  

        <>
        <Navigation />

        <RegisterBox />


      
        </>
    );
}
 
export default RegisterPage;