
import React, { useEffect } from "react";
import "./typeMessageComponent.scss";
import { useState, useRef } from "react";
import { useAppDispatch } from "../../hooks/redux.ts";
import { typeMessage } from "../../store/reducers/ActionCreators.ts";
import { useParams } from "react-router-dom";
import SmileyBox from "../smileyBox/smileyBox.tsx";
import  Sm  from "../../asserts/sm.png"
import Plane from "../../asserts/plane.png"
import { setVisibleEmojePanel } from "../../store/reducers/ActionCreators.ts";
const TypeMessageComponent = ({ sendMessage, value }) => {
  const [val, setVal] =useState("")
  const txt = useRef(null);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [vis, setVis]=useState(false)
  const [sendValue, setSendValue] = useState({
    user: "user",
    typedMessage: id ? id : "",
  });
const [smiley, setSmiley]=useState("");
useEffect(()=> {
  setVal(prev=>prev+smiley)
 setSendValue((prevData) => ({
    ...prevData,
    typedMessage: prevData.typedMessage + smiley,
  })); 
}, [smiley])
  useEffect(() => {
    dispatch(typeMessage({ message: sendValue.typedMessage, author: sendValue.user }));
  }, [sendValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setVal(value)
    if (txt.current) {
    setSendValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  }
  };
  const handleButtonClick = () => {
    sendMessage();
    setVal("")
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };
const handleOpacity =()=> {
  setVis(prev => !prev)
}
  return (
  <>
    <div className="typeMessageComponent">
      <div className="smileyBtn" onClick={handleOpacity}>
      <img src={Sm} className="emojyImg"  alt="image" />
      </div>
      <input
      ref={txt}
     defaultValue={""}
     value={val}
        name="typedMessage"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="typeMessageInput"
        placeholder="Message..."
      />
      <img onClick={handleButtonClick} className="ssendTypedMsg" src={Plane} alt="senf" />
    </div>
    {vis ? (
      <SmileyBox  setSmiley={setSmiley} />
    ) :  (
      <></>
    )}
  </>
  );
};

export default TypeMessageComponent;
