

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Panel from '../panel/panel.tsx';
const WebSock = () => {
    const {id} =useParams()
    console.log("IID" +id)
useEffect(()=> {
setUsername(id)
}, [])
   // const {id} =useRoutes()
   // console.log("IDD" +id)
   const socket = useRef();
   const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [connected, setConnected] = useState(false);
    const [username, setUsername] = useState('');
    const [recipient, setRecipient] = useState('');
    const [userList, setUserList] = useState([]);  
   /* useEffect(()=> {
        connect()
    }, []) */
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
        }; 

        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data);

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
  
    const sendMessage = async () => {
        if (recipient && value) {
            const message = {
                username,
                to: recipient,
                text: value,
                id: Date.now(),
                event: 'privateMessage',
            };
            socket.current.send(JSON.stringify(message));
            setValue('');
        }
    };



 










  /*
    if (!connected) {
        return (
            <div className="center">
                <div className="form">
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Введите ваше имя"
                    />
                    <button onClick={connect}>Войти</button>
                </div>
            </div>
        );
    }  */
 
 
 







    return (
        <div>

        <div className="center" style={{position: "relative", left: "1000px", display: "none"}}>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     <img style={{display: "none"}} src="https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg" onLoad={()=> connect()} />

  

           
            <div>
                <div className="form">
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
                </div>
                <div className="messages">
                    {messages.map((mess) => (
                        <div  style={{color: "white"}} key={mess.id}>
                            <div className="message">
                                {mess.from}: {mess.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="user-list" style={{color: "white"}}>
                    <h3>Online Users:</h3>
                    <ul>
                        {userList.map((user) => (
                            <li style={{color: "white"}} key={user}>{user}</li>
                            ))}
                    </ul>
                </div>
            </div>
           {/*}  <button onClick={connect}>Войти</button>   */}
                            </div>
           <Panel userList={userList} />
        </div>
    );
};

export default WebSock; 








































