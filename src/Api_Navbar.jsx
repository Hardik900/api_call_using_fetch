import React from "react";
import { NavLink} from "react-router-dom";

function Api_Navbar(){
    return(
        <>
            <div className="Api_Navbar"> 
            <div>
                <NavLink to="/">hh</NavLink>
            </div>
                <ul>
                    <li><NavLink to='/jpholder'>Jsonplaceholder</NavLink></li>
                    <li>Jsonplaceholder</li>
                    <li>Jsonplaceholder</li>
                </ul>
            </div>
        </>
    )
}

export default Api_Navbar;