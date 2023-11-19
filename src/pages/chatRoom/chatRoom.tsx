import React, { useEffect } from "react";
import Navigation from "./../../components/navigation/navigation.tsx"
import ChatRoomComponent from "../../components/chatRoomComponent/chatRoomComponent.tsx";
import WebSock from "../../components/WebSocket/WebSocket.js";
import { useAppDispatch } from "../../hooks/redux.ts";
import { switchVisibilityOfPanel } from "../../store/reducers/ActionCreators.ts";
const ChatRoom = ({socketInstance}: any) => {
  const dispatch =useAppDispatch()
  useEffect(()=> {
    dispatch(switchVisibilityOfPanel(true));
//dispatch(switchVisibilityOfPanel)
  }, [])
    return ( 

        <>
     <Navigation />
   <ChatRoomComponent />
   <WebSock />
        </>
     );
}
 
export default ChatRoom;