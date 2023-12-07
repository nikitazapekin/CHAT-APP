import React, {useEffect, useState} from "react";
import "./toast.scss"

const Toast = ({text, from}) => {
  const [prog, setProg] =useState(100)
  const [vis, setVis] =useState(true)
  const handleClick = ()=> {
    setProg(0);
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
        <h1 className="h1-toast">{from}</h1>
        <h3 className="h3-toast">{text}</h3>
    {/*    <img src={Logo} className="toast-logoOfUser"  alt="logo" />
        <img
        onClick={handleClick}
         src={Tel} alt="close" className="close-btn" />
        */}
        <progress
        className="progress-bar"
        max="100"
         value={prog}
        
      > 
        </progress>
        
                </div>

) : (
  <>
        
        </>
      )}
        </>
      )
}
 
export default Toast;