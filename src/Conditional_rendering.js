import React, { useState } from "react";
import Timer from "./Timer";
import Counter from './Counter';
import Navbar from "./Navbar";
import Cards from "./Cards";

function Conditional_rendering(){
    const [Conditionrender, setConditionrender] = useState(1);

    return(
        <>  <br />
            <button onClick={()=>setConditionrender(1)}>Timer</button>
            <button onClick={()=>setConditionrender(2)}>Counter</button>
            <button onClick={()=>setConditionrender(3)}>Cards</button>
            {Conditionrender == 1 ? <Timer/>: ""}
            {Conditionrender == 2 ? <Counter/>: ""}
            {Conditionrender === 3 ? <Cards/>: ""}
            
        </>
    )
}

export default Conditional_rendering;