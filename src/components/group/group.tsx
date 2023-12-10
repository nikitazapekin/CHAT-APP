



import "./group.scss";
import React, { useEffect, useState, useRef } from "react";
import { useAppSelector } from "../../hooks/redux.ts";
import { useAppDispatch } from "../../hooks/redux.ts";
import Del from "../../asserts/del.png"
import { setGroup } from "../../store/reducers/ActionCreators.ts";
 
const Group = () => {

    //trinsicElements.input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    const { userList } = useAppSelector((state) => state.userReducer);
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
title: inputValue.current?.textContent,
participants: participants
}
if(typeof group.title==="string"){

    dispatch(setGroup(group))
}
} 

const handleDelete = (param: string) => {
    const updatedParticipants = participants.filter((participant: string) => participant !== param);
    setParticipants(updatedParticipants);
};

    return (
        <div className="group">
            <h1>Add participants</h1>
            <h3 className="chatTitle">Title</h3>
            <input className="titleOfChat"   ref={inputValue} />
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
    );
};

export default Group;
