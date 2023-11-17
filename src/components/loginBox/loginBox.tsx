import React, { useEffect } from "react";
import "./loginBox.scss"
import { Link } from "react-router-dom";
const LoginBox = () => {
  useEffect(()=> {
//fetch("http:localhost://5000/test").then(res=>res.json()).then(res=>console.log(res))
  }, [])
    return ( 

    <div className="loginBox">
<h1 className="registerTitle">Register</h1>
<input type="text" className="typeTitle" placeholder="Type title" />
<input type="text" className="typeEmail" placeholder="Type email" />
<input type="text" className="typePassword" placeholder="Type password" />

<button type="button" className="submitRegister">Submit</button>
<h3 className="orLogin">
  <Link to="/" style={{textDecoration: "none", color: "#fff"}}>
    Or register
    </Link>  
    </h3>
    </div>
     );
}
 
export default LoginBox;