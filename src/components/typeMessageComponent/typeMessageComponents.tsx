import React, { useEffect } from "react";
 
import "./typeMessageComponent.scss"
import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux.ts";
import { typeMessage } from "../../store/reducers/ActionCreators.ts";
import { useParams } from "react-router-dom";

const TypeMessageComponent = ({sendMessage}) => {
    const {id} =useParams()
    const dispatch = useAppDispatch()
    const [sendValue, setSendValue]=useState({
        user: "user",
        typedMessage: id ? id : ""
    })
    useEffect(()=> {
dispatch(typeMessage({message: sendValue.typedMessage, author: sendValue.user}))
    }, [sendValue])
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=> {
        const { name, value } = event.target;
        setSendValue((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        console.log(sendValue)
    }
    return ( 
<div className="typeMessageComponent">
<input name="typedMessage" onChange={ handleChange} className="typeMessageInput" placeholder="Message..."/>
<button className="sendTypedMessage" onClick={sendMessage}>
Send
</button>
</div>

     );
}
 
export default TypeMessageComponent;