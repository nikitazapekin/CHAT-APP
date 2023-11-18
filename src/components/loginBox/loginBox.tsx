 



import React, { useEffect, useState } from "react";
import "./loginBox.scss"
import WebSock from "../WebSocket/WebSocket";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const LoginBox = () => {
  const navigate= useNavigate()
 // const [username, setUsername] = useState('');
  useEffect(()=> {
//fetch("http:localhost://5000/test").then(res=>res.json()).then(res=>console.log(res))
  }, [])
const  [data, setData] =useState({
  username: ""
})
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    
      const { name, value } = event.target;
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
 useEffect(()=> {
console.log("data" +JSON.stringify(data))
 }, [data])
 const handleSubmit =()=> {
  console.log("subnit")
  if(data.username.length>1){

    navigate(`/account/${data.username}`)
  }
   
 }
    return ( 

    <div className="loginBox">
<h1 className="registerTitle">GO TO CHAT-APP</h1>
<input name="username" type="text" className="typeTitle" placeholder="Type username" onChange={ handleInput} />


<button type="button" className="submitRegister" onClick={ handleSubmit}>Submit</button>

    </div>
     );
}
 
export default LoginBox;