
import React from "react"
import "./navigation.scss"
import { useAppSelector } from "../../hooks/redux.ts"
import { Link } from "react-router-dom"
const Navigation = () => {
    const {currentUser} =useAppSelector(state=>state.userReducer)
    return ( 
        <div className="navigation">
<h2 className="navigationTitle">
    CHAT APP
    
    </h2> 
    <h3 className="navigationUsername">
      
      <Link style={{textDecoration: "none", color: "#fff"}} to={`/account/${currentUser}`}>

        {currentUser}
      </Link>
    </h3>
        </div>
     );
}
 
export default Navigation;