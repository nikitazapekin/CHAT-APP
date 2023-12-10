



import "./group.scss";
import React, { useEffect, useState, useRef } from "react";
import { useAppSelector } from "../../hooks/redux.ts";
import { useAppDispatch } from "../../hooks/redux.ts";
import Del from "../../asserts/del.png"

import { setGroup, setVisibleGroup } from "../../store/reducers/ActionCreators.ts";
 
const Group = ({createGroup}) => {
     //const {} = useAppSe
    //trinsicElements.input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    const [titleValue, setTitleValue] = useState(""); 
    const { userList, isVisibleGroup } = useAppSelector((state) => state.userReducer);
    const [participants, setParticipants] = useState<any>([]);
    const [selectedParticipant, setSelectedParticipant] = useState("");
    const dispatch = useAppDispatch();
    const inputValue= useRef<HTMLInputElement>(null)
    const handleParticipantChange = (event) => {
        setSelectedParticipant(event.target.value);
    };

    const handleAddParticipant = () => {
        if (selectedParticipant) {
            setParticipants([...participants, selectedParticipant]);
            setSelectedParticipant("");  
        }
    };
const handleSubmit =()=> {
const group = {
title: titleValue,
participants: participants
}
 
if(typeof group.title==="string"){
dispatch(setVisibleGroup())
    dispatch(setGroup(group))
    createGroup(group)
}
} 


const handleTitleChange = (event) => {
    setTitleValue(event.target.value); 
};
const handleDelete = (param: string) => {
    const updatedParticipants = participants.filter((participant: string) => participant !== param);
    setParticipants(updatedParticipants);
};

    return (
<>
        {isVisibleGroup ? (
            
            <div className="group">
            <h1>Add participants</h1>
            <h3 className="chatTitle">Title</h3>
            <input className="titleOfChat" onChange={handleTitleChange} />
            <h3 className="addParticipants">Add participants</h3>
            <select value={selectedParticipant} onChange={handleParticipantChange}>
                <option value="">Select participant</option>
                {userList.map((item, index) => (
                    <option key={index}   >
                        {item}
                    </option>
                ))}
            </select>
            <button className="addParticipantClick " onClick={handleAddParticipant}>
                Add
            </button>
            <div>
                <h3 className="particSubtitle">Participants:</h3>
                <ul className="ulParticipants">
                    {participants.map((participant, index) => (
                        <div className="participantsWrapper">

                        <li className="participantsItem" key={index}>{participant}</li>
                        <img onClick={()=>handleDelete(participant)} src={Del}  alt="delete" className="deleteParticipant" />
                        </div>
                    ))}
                </ul>
                </div>
                <button className="submitGroup"  onClick={handleSubmit}>Submit</button>
                </div> 
                
                ) : (
                    <>
                    </>
                )}
                </>
    );
};

export default Group;
