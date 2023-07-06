import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function Predict_age() {
    const [data, setData] = useState([])
    const [status, setStatus] = useState(false)
    useEffect(() => {
        fetch('https://api.agify.io/?name=rahul')
            .then(res => res.json())
            .then(response => {
                console.log("response",response)
                setData(response.name)
                setStatus(true)
            }).catch((error)=>{
                console.log(error.message,"error")
            })
        },[])
        console.log(data,"data")
        return (
            <>
                {data}
                <Navbar />
                {status == true ? <h1>{data.count}</h1> : "empty data"}
            </>
        )
    
}

export default Predict_age;