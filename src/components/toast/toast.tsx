import React, {useEffect, useState} from "react";
import "./toast.scss"
import Tel from "../../asserts/close.png"
import Logo from "../../asserts/logo.png"
import { Link, useNavigate } from "react-router-dom";
const Toast = ({text, from}) => {
  const navigate= useNavigate()
  const [prog, setProg] =useState(100)
  const [vis, setVis] =useState(true)
  const handleClick = ()=> {
    setProg(0);
  }
  const handleClickNavigate =(param: string)=> {
navigate(`/chats/${param}`)
  }
useEffect(()=> {
  if(prog>0){

    setTimeout(()=> {
      setProg(prev=>prev-1)
    },100)
  } else {
    setVis(false)
  }
  }, [prog])
    return (
      <>
      {vis ? (
        
        
                <div className="toastBox">
                  <div className="toastBoxWrapper" onClick={()=>handleClickNavigate(from)}>

        <h1 className="h1-toast">{from}</h1>
        <h3 className="h3-toast">{text}</h3>
        <img src={Logo} className="toast-logoOfUser"  alt="logo" />
        <progress
        className="progress-bar"
        max="100"
        value={prog}
        
        > 
        </progress>
        </div>
        <img
        onClick={handleClick}
         src={Tel} alt="close" className="close-btn" />
        
        
                </div>

) : (
  <>
        
        </>
      )}
        </>
      )
}
 
export default Toast;