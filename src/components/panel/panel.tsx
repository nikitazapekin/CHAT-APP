



import React, { useState } from "react";
import "./panel.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux.ts";
import { useAppDispatch } from "../../hooks/redux.ts";
import { setCRecipient, setVisibleGroup, settUserList } from "../../store/reducers/ActionCreators.ts";
import GroupImage from "../../asserts/users.jpg"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Group from "../group/group.tsx";
const Panel = ({ userList, groupList, createGroup, grouppList }) => {
    const {id} =useParams()
    const [pr, setPr] =useState<any>([]);
    useEffect(()=> {
        for(let i=0; i<userList.length; i++){
            dispatch(settUserList(userList[i]))
        }
    }, [userList])
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { isVisiblePanel, arrayOfGroups } = useAppSelector(state => state.userReducer);
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
       dispatch(setVisibleGroup())

    }
    const handleSelect = (param: string)=> {
        
        dispatch(setCRecipient(param))
        navigate(`/chats/${param}`)
    }
useEffect(()=> {
    for(let i=0; i<groupList.length; i++){
        setPr(prev=>[prev, groupList[i]])
    }
}, [ groupList])
    return (
        isVisiblePanel ? (
            <div className="panel">
                <div className="btnsPanel">
                    <button className="btnPanel" onClick={handleClick}>Show Online</button>
                </div> 
                {visible && (
                 userList.map(item => (
                    <>
                    {item!=id ? (
                        
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
                        ) : (
                            <>
                            </>
                        )}
                        </>
                    ))
                )}

 



{visibleChats && (
            grouppList.map(item => (
                        <Link onClick={()=>handleSelect(item)} key={item} style={{ textDecoration: "none" }} to={`/chats/group-${item}`}>
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
{visibleChats && arrayOfGroups.data.length>0 && (
  arrayOfGroups.data.map(item => (
            <Link onClick={()=>handleSelect(item.title)} key={item.title} style={{ textDecoration: "none" }} to={`/chats/group-${item.title}`}>
                <div className="onlineUser" key={item.title}>
                    <div className="onlineLine">
                        <h3 className="onlineUserName">
                            {item.title}
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
