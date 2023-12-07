
import "./webSocket.scss"
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Panel from '../panel/panel.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts';
import TypeMessageComponent from '../typeMessageComponent/typeMessageComponents.tsx';
import { addMessage } from '../../store/reducers/ActionCreators.ts';
import Toast from '../toast/toast.tsx';
const WebSock = () => {
    const dispatch = useAppDispatch()
    const {message, author, currentUser, recipientSelected, isVisibleTextPanel} = useAppSelector(state=>state.userReducer)

    
    const {id} =useParams()
    console.log("IID" +id)
     
   const socket = useRef();
   const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [connected, setConnected] = useState(false);
 //   const [username, setUsername] = useState('');
 const [username, setUsername] = useState(currentUser);
    const [recipient, setRecipient] = useState('');
    const [userList, setUserList] = useState([]);  
    const [toasts, setToasts] = useState([]);
    useEffect(()=> {
        setUsername(currentUser)
    
    }, [currentUser])
    useEffect(()=> {

    }, [])
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
        messages.map((item, index)=> {
            dispatch(addMessage(messages[index].event, messages[index].from, messages[index].text, currentUser))
console.log("MESSAGE"+JSON.stringify(item))
//return <Toast />
console.log("MESSSSSSSSSSSSSSSSSSAGE ITEM"+item)
const newToasts = messages.map((item, index) => {
    return <Toast text={item.text} from={item.from} key={index} message={item} />;
  });
  setToasts(newToasts);
        })
    }, [messages])
    

  useEffect(()=> {
   
    const message = {
        
    currentUser, 
       to: username,
        text: value,
        id: Date.now(),
        event: 'privateMessage',
    };
    console.log("MESSAGEEE"+JSON.stringify(message))
  }, [username, recipient, value])

    const sendMessage = async () => {
        console.log("heloo")
      
        const message = {
         username,
      to: recipientSelected,
            text: value,
            id: Date.now(),
            event: 'privateMessage',
        };
        console.log("message to send:"+JSON.stringify(message))
        if (recipientSelected && value) {
            socket.current.send(JSON.stringify(message));
            setValue('');
            dispatch(addMessage('privateMessage',currentUser, value, username))
        }
    };
useEffect(()=> {
    console.log("==================================================================")
console.log("MESS"+messages)
}, [messages])

    return (
        <div style={{width: "100%", height: "100%", backgroundColor: "red"}}>

    
     
     
     
      {toasts}
      <div className="center" style={{position: "absolute", top:"400px", left: "1000px"}}> 
     
     
     
     
     <div className='toastBlock'>

     </div>
     
     
     
     
     <img style={{display: "none"}} src="https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg" onLoad={()=> {
        connect()
        
    }
    }/>

  

                            </div>
           <Panel userList={userList} />

           {isVisibleTextPanel ? (
            <>
            <TypeMessageComponent sendMessage={sendMessage} value={value} />
            
            </>
           ) : (
            <></>
           )}
        </div>
    );
};

export default WebSock; 








































