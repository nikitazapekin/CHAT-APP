



import React, { useState } from "react";
import "./panel.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux.ts";
import { useAppDispatch } from "../../hooks/redux.ts";
import { setCRecipient } from "../../store/reducers/ActionCreators.ts";
import { useNavigate } from "react-router-dom";
const Panel = ({ userList }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { isVisiblePanel } = useAppSelector(state => state.userReducer);
    const [visible, setVisible] = useState(false);

    const handleClick = ( ) => {
        // Toggle visibility state
        setVisible(!visible);
    };
    const handleSelect = (param: string)=> {
        console.log("seleeeect"+param)
        dispatch(setCRecipient(param))
        navigate(`/chats/${param}`)
    }

    return (
        isVisiblePanel ? (
            <div className="panel">
                <div className="btnsPanel">
                    <button className="btnPanel" onClick={handleClick}>Show Online</button>
                    <button className="btnPanel">Show Chats</button>
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
            </div>
        ) : (
            <></> 
        )
    );
};

export default Panel;
