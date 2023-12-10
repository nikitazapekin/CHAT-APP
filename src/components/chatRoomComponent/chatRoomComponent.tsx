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
    // Add other properties if present in your message objects
}
const ChatRoomComponent = () => {
    const {arrayOfMessages, currentUser}= useAppSelector(state=>state.userReducer)
    console.log("arrau of messages"+ JSON.stringify(arrayOfMessages))

useEffect(()=> {
    for (let i=0; i<arrayOfMessages.data.length; i++){

        console.log(arrayOfMessages.data[i], arrayOfMessages.data[i].from, arrayOfMessages.data[i].too )
    }
})
    const [arrOfMsg, setArrOfMsg] =useState<MessageType[]>([]);
    const {id} =useParams()
    console.log("IDDD"+id)
   /* useEffect(()=> {
for(let i=0; i<arrayOfMessages.data.length; i++){
if((arrayOfMessages[i].data.from!=currentUser && arrayOfMessages[i].data.from==id) ||  (arrayOfMessages[i].data.from!=id && arrayOfMessages[i].data.from==currentUser)  ){
//setArrOfMsg(prev=>prev.push(arrayOfMessages[i].data))
setArrOfMsg([prev=>prev,arrayOfMessages[i].data ])
}
}
    }, [arrayOfMessages]) */


   /* useEffect(() => {
        const filteredMessages = [];
        for (let i = 0; i < arrayOfMessages.data.length; i++) {
            if (
                (arrayOfMessages.data[i].from !== currentUser && arrayOfMessages.data[i].from === id) ||
                (arrayOfMessages.data[i].from !== id && arrayOfMessages.data[i].from === currentUser)
            ) {
                filteredMessages.push(arrayOfMessages.data[i]);
            }
        }
        setArrOfMsg(filteredMessages);
    }, [arrayOfMessages, currentUser, id]); */

    
    return ( 
        <div className="chatRoomComponent">
{/*<TypeMessageComponent />  */}
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

                                            {/*
 <div className="youDataMessage">

<h1 className="messageFromYou"> You </h1>
<h2 className="messageFromyou">{item.text}</h2>
                                        </div> */}

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


{/*<SmileyBox />*/}
        </div>
     );
}
 
export default ChatRoomComponent;


//{item.from!=id && item.from == currentUser && item.too == id ? (