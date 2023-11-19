import React from "react";
import "./chatRoomComponent.scss"
import TypeMessageComponent from "../typeMessageComponent/typeMessageComponents.tsx";
import { useAppSelector } from "../../hooks/redux.ts";
const ChatRoomComponent = () => {
    const {arrayOfMessages, currentUser}= useAppSelector(state=>state.userReducer)
    return ( 
        <div className="chatRoomComponent">
{/*<TypeMessageComponent />  */}
<div className="messagesBox">

{arrayOfMessages.data.map((item, index)=> (
    <div className="messageFromUser"> 
{item.from!=currentUser ? (
<>
    <img className="onlineUserLogo" src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
    alt="logo" />
    <div className="userDataMessage">

                                    <h1 className="messageFromUserName">  {item.from} </h1>
                                    <h2 className="messageFromUserText">{item.text}</h2>
                                    </div>
    </>
                                        ) : (
                                            <>
 <div className="youDataMessage">

<h1 className="messageFromYou"> You </h1>
<h2 className="messageFromyou">{item.text}</h2>
</div>

                                            </>
                                        )
                                    
                                    }
        
    </div>
))}
</div>
        </div>
     );
}
 
export default ChatRoomComponent;
