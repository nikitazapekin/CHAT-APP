

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Panel from '../panel/panel.tsx';
import { useAppSelector } from '../../hooks/redux.ts';
import TypeMessageComponent from '../typeMessageComponent/typeMessageComponents.tsx';
const WebSock = () => {
    const {message, author, currentUser, recipientSelected} = useAppSelector(state=>state.userReducer)

    
    const {id} =useParams()
    console.log("IID" +id)
    // const {id} =useRoutes()
    // console.log("IDD" +id)
   const socket = useRef();
   const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [connected, setConnected] = useState(false);
 //   const [username, setUsername] = useState('');
 const [username, setUsername] = useState(currentUser);
    const [recipient, setRecipient] = useState('');
    const [userList, setUserList] = useState([]);  
    useEffect(()=> {
        setUsername(currentUser)
    //setUsername(id)
    //setRecipient(id)
    }, [currentUser])
    useEffect(()=> {

    }, [])
    useEffect(()=> {
//setUsername(author)
    }, [author])
    useEffect(()=> {
        setValue(message)
     
            }, [message])
    
        function connect() {
            socket.current = new WebSocket('ws://localhost:5000');
    
            socket.current.onopen = () => {
                const name= id;
                console.log("NAME"+name)
                setConnected(true);
                const message = {
                    event: 'connection',
             //   name,
          username,
                    id: Date.now(),
                };
                socket.current.send(JSON.stringify(message));
                console.log("CURRENT CONNECTION "+JSON.stringify(message))
            }; 
    
            socket.current.onmessage = (event) => {
                console.log("receivweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed" +event.data)
                const message = JSON.parse(event.data);
    console.log("receivedMessage"+JSON.stringify(message))
    console.log(message)
                switch (message.event) {
                    case 'privateMessage':
                        setMessages(prev => [...prev, message]);
                        break;
                    case 'userList':
                        setUserList(message.userList);
                        break; 
                    default:
                        break;
                }
            };
    
            socket.current.onclose = () => {
                console.log('Socket закрыт');
            };
    
            socket.current.onerror = () => {
                console.log('Socket произошла ошибка');
            };
        } 
    
    
    
    

  useEffect(()=> {
   
    const message = {
        //username,
       // to: recipient,
    currentUser, 
       to: username,
        text: value,
        id: Date.now(),
        event: 'privateMessage',
    };
    console.log("MESSAGEEE"+JSON.stringify(message))
  }, [username, recipient, value])
  /*  const sendMessage = async () => {
        console.log("heloo")
        const message = {
    username:currentUser,
         //   to: username,
      to: recipientSelected,
         //  to: recipient,
            text: value,
            id: Date.now(),
            event: 'privateMessage',
        };
        console.log("message to send:"+JSON.stringify(message))
     //   if (recipient && value) {
        if (recipientSelected && value) {
            socket.current.send(JSON.stringify(message));
            setValue('');
        }
    }; */
    const sendMessage = async () => {
        console.log("heloo")
      //  username= currentUser
        
        const message = {
  //  username:currentUser,
         //   to: username,
    //  to: recipientSelected,
         //  to: recipient,
         username,
      //   to: recipient,
      to: recipientSelected,
            text: value,
            id: Date.now(),
            event: 'privateMessage',
        };
        console.log("message to send:"+JSON.stringify(message))
     //   if (recipient && value) {
        if (recipientSelected && value) {
            socket.current.send(JSON.stringify(message));
            setValue('');
        }
    };
useEffect(()=> {
    console.log("==================================================================")
console.log("MESS"+messages)
}, [messages])

    return (
        <div>

      {/*  <div className="center" style={{position: "relative", left: "1000px", display: "none"}}>  */}
     
     
     
      <div className="center" style={{position: "absolute", top:"400px", left: "1000px"}}> 
     
     
     
     
     
     
     
     
     
     
     <img style={{display: "none"}} src="https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg" onLoad={()=> {
        connect()
        
    }
    }/>

  

      {/*     <button onClick={onClickHandler}>eeeeeeeeeeeeeee</button> */}
            <div>
              {/*  <div className="form">
                    <input
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        type="text"
                        placeholder="Введите имя получателя"
                    />
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                    />
                    <button onClick={sendMessage}>Отправить</button>
</div> */}
                <div className="messages">
                    {messages.map((mess) => (
                        <div  style={{color: "white"}} key={mess.id}>
                            <div className="message">
                                {mess.from}: {mess.text}
                            </div>
                        </div>
                    ))}
                </div>
             {/*   <div className="user-list" style={{color: "white"}}>
                    <h3>Online Users:</h3>
                    <ul>
                        {userList.map((user) => (
                            <li style={{color: "white"}} key={user}>{user}</li>
                            ))}
                    </ul>
                        </div> */}
            </div>
           {/*}  <button onClick={connect}>Войти</button>   */}
                            </div>
           <Panel userList={userList} />
           <TypeMessageComponent sendMessage={sendMessage} />
        </div>
    );
};

export default WebSock; 








































