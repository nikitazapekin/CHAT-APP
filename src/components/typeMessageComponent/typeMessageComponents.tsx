
import React, { useEffect } from "react";
import "./typeMessageComponent.scss";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux.ts";
import { typeMessage } from "../../store/reducers/ActionCreators.ts";
import { useParams } from "react-router-dom";
import SmileyBox from "../smileyBox/smileyBox.tsx";
import  Sm  from "../../asserts/sm.png"
import Plane from "../../asserts/plane.png"
import { setVisibleEmojePanel } from "../../store/reducers/ActionCreators.ts";
const TypeMessageComponent = ({ sendMessage, value }) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [vis, setVis]=useState(false)
  const [sendValue, setSendValue] = useState({
    user: "user",
    typedMessage: id ? id : "",
  });
const [smiley, setSmiley]=useState("");
useEffect(()=> {
 setSendValue((prevData) => ({
    ...prevData,
    typedMessage: prevData.typedMessage + smiley,
   // ["typedMessage"]: ...smiley,
  })); 
}, [smiley])
  useEffect(() => {
    dispatch(typeMessage({ message: sendValue.typedMessage, author: sendValue.user }));
  }, [sendValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSendValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    sendMessage();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };
const handleOpacity =()=> {
  setVis(prev => !prev)
 // dispatch(setVisibleEmojePanel())
}
  return (
  <>
    <div className="typeMessageComponent">
      <div className="smileyBtn" onClick={handleOpacity}>
      <img src={Sm} className="emojyImg"  alt="image" />
      </div>
      <input
      defaultValue={""}
      value={value}
        name="typedMessage"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="typeMessageInput"
        placeholder="Message..."
      />


      <img onClick={handleButtonClick} className="ssendTypedMsg" src={Plane} alt="senf" />
     {/* <button className="sendTypedMessage" onClick={handleButtonClick}>
        Send
  </button> */}
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
