
import React from "react"
import "./navigation.scss"
import { useAppSelector } from "../../hooks/redux.ts"
const Navigation = () => {
    const {currentUser} =useAppSelector(state=>state.userReducer)
    return ( 
        <div className="navigation">
<h2 className="navigationTitle">
    CHAT APP
    
    </h2> 
    <h3 className="navigationUsername">
        {currentUser}
    </h3>
        </div>
     );
}
 
export default Navigation;