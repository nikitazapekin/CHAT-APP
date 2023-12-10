import React from "react";
import Navigation from "../../components/navigation/navigation.tsx";
import TypeMessageComponent from "../../components/typeMessageComponent/typeMessageComponents.tsx";
import WebSock from "../../components/WebSocket/WebSocket.js";
import ChatRoomComponent from "../../components/chatRoomComponent/chatRoomComponent.tsx";
const GroupPage = () => {
    return (

        <>
        <Navigation />

 <ChatRoomComponent />
        </>
      );
}
 
export default GroupPage;