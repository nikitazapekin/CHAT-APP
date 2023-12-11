import React from "react";
import "./chatRoomComponent.scss"
import TypeMessageComponent from "../typeMessageComponent/typeMessageComponents.tsx";
import { useAppSelector } from "../../hooks/redux.ts";
import SmileyBox from "../smileyBox/smileyBox.tsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import Logo from "../../asserts/logo.png"



interface MessageType {
    event: string;
    from: string;
    text: string;
    to: string;
  
}
const ChatRoomComponent = () => {
    const {arrayOfMessages, currentUser}= useAppSelector(state=>state.userReducer)
    


    const [arrOfMsg, setArrOfMsg] =useState<MessageType[]>([]);
    const {id} =useParams()
    return ( 
        <div className="chatRoomComponent">
 
<div className="messagesBox">

{arrayOfMessages.data.map((item, index)=> (
    <div className="messageFromUser"> 
{item.from!=currentUser && item.from == id && item.too == currentUser ? (
<>
 
    <div className="userDataMessage">

                                    <h1 className="messageFromUserName">  {item.from} </h1>
                                    <h2 className="messageFromUserText">{item.text}</h2>
                                    </div>
    </>
                                        ) : (
                                            <>

                                            </>
                                        )
                                    
                                    }





{ item.from == currentUser && item.too == id ? (

<div className="youDataMessage">

<h1 className="messageFromYou"> You </h1>
<h2 className="messageFromyou">{item.text}</h2>
                                        </div>
) : (
    <></>
)
}
    </div>
))}
</div>

 

        </div>
     );
}
 
export default ChatRoomComponent;

