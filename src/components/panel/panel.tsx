



import React, { useState } from "react";
import "./panel.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux.ts";
import { useAppDispatch } from "../../hooks/redux.ts";
import { setCRecipient, setVisibleGroup, settUserList } from "../../store/reducers/ActionCreators.ts";
import GroupImage from "../../asserts/users.jpg"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Group from "../group/group.tsx";
const Panel = ({ userList, groupList }) => {
    useEffect(()=> {
        console.log(":IST" +userList)
        for(let i=0; i<userList.length; i++){
            dispatch(settUserList(userList[i]))
        }
     
    }, [userList])
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { isVisiblePanel } = useAppSelector(state => state.userReducer);
    const [visible, setVisible] = useState(false);
    const [visibleChats, setVisibleChats] = useState(false);
    const [visibleGroups, setVisibleGroups] = useState(false);
    const handleClick = ( ) => {
        
        setVisible(!visible);
    };
    const handleClickChats = ( ) => {
        
        setVisibleChats(!visibleChats);
    };
    const handleClickGroup = ( ) => {
       // setVisibleGroups(!visibleGroups);
       dispatch(setVisibleGroup())

    }
    const handleSelect = (param: string)=> {
        
        dispatch(setCRecipient(param))
        navigate(`/chats/${param}`)
    }
useEffect(()=> {
    console.log("GROUP LUST"+groupList)
}, [ groupList])
    return (
        isVisiblePanel ? (
            <div className="panel">
                <div className="btnsPanel">
                    <button className="btnPanel" onClick={handleClick}>Show Online</button>
                    <button className="btnPanel"  onClick={handleClickChats}>Show Chats</button>
                
               <button className="btnPanel" onClick={handleClickGroup}>
                Group
               </button>
                </div>


             
                {visible && (
                 userList.map(item => (
                        <Link onClick={()=>handleSelect(item)} key={item} style={{ textDecoration: "none" }} to={`/chats/${item}`}>
                            <div className="onlineUser" key={item}>
                                <div className="onlineLine">
                                    <h3 className="onlineUserName">
                                        {item}
                                    </h3>
                                </div>
                                <img className="onlineUserLogo" src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                    alt="logo"
                                />
                            </div>
                        </Link>
                    ))
                )}


{visibleChats && (


               groupList.map(item => (
                        <Link onClick={()=>handleSelect(item)} key={item} style={{ textDecoration: "none" }} to={`/group/${item}`}>
                            <div className="onlineUser" key={item}>
                                <div className="onlineLine">
                                    <h3 className="onlineUserName">
                                        {item}
                                    </h3>
                                </div>
                                <img className="onlineUserLogo" src={GroupImage}
                                    alt="logo"
                                />
                            </div>
                        </Link>
              
                    ))
                )}


            </div>
          
        ) : (
            <></> 
        )
    );
};

export default Panel;
