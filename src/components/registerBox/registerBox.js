import "./registerBox.scss"
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
//import { request } from "../../hooks/useHttp";
import { useHttp } from "../../hooks/useHttp";

const RegisterBox = () => {
  const {loading, request, error, clearError} = useHttp()
  useEffect(()=> {
 //   fetch("http:localhost://5000/test").then(res=>res.json()).then(res=>console.log(res))
      }, [])
    const [data, setData] =useState({
        name: "",
        email: "", 
        password: ""
    })
//const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  const handleInput = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleClick = ()=>{
    console.log("data")
    console.log(data)
console.log("register")

axios.post('/api/auth/register', {name: data.name, email: data.email, password: data.password })
//axios.post('/api/auth/register', {name: data.name, email: data.email, password: data.password })
  // axios.post('/api/auth/register', {name: data.name, email: data.email, password: data.password })
 // axios.post('http://localhost:3000/test', {name: "name", email: "email",   password:  "password" })
 
    .then(function (response) {
      console.log('Успешно отправлено!', response.data);
    })
    .catch(function (error) {
      console.error('Произошла ошибка:', error);
    })  
  //  .fetch("http:localhost://5000/test").then(res=>res.json()).then(res=>console.log(res))
  }
  useEffect(()=>{
    console.log("data")
    console.log(data)
  }, [data])




  const registerHandler = async () => {
    try {
      const dataa = await request('/api/auth/register', 'POST', {...data})
     console.log("send")
    } catch (e) {

      console.log(e)
    }
  }

    return ( 
        <div className="registerBox">
<h1 className="registerTitle">Register</h1>
<input name="name" type="text" className="typeTitle" placeholder="Type title"  onChange={ handleInput}/>
<input name="email" type="text" className="typeEmail" placeholder="Type email" onChange={ handleInput} />
<input name="password" type="text" className="typePassword" placeholder="Type password" onChange={ handleInput} />

<button   className="submitRegister" onClick={()=>registerHandler()}>Submit</button>
<h3 className="orLogin">
  <Link to="/login" style={{textDecoration: "none", color: "#fff"}}>
    Or login
    </Link>    
    </h3>
        </div>
     );
}
 
export default RegisterBox;
