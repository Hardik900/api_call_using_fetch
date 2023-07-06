import React, { useEffect, useState } from "react"

function Test(props){
    const [update, setUpdate] = useState("Click here to update a state")
    const fun = () =>{
        setUpdate("Samuel")
    }
    useEffect(()=>{
        const hello = () =>{
            
        }
    })
    return(
        <>
            <h1>My name is Hardik saini and {props.name}</h1>
            <h2>{update}</h2>
            <button onClick={()=>{fun()}}>click here</button>
        </>
    )
}

export default Test