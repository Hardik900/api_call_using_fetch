import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function University_Data() {
    const [universityData, setUniversityData] = useState([]);
    console.log(universityData, "universityData")
    // console.log(universityData[1].country,"universityData")
    useEffect(() => {
        fetch("http://universities.hipolabs.com/search?")
            .then((resp) => {
                return resp.json()
            }).then((response) => {
                // console.log(response[0].web_pages,"response")
                // console.log(response, "response")
                console.log(response[0].country, "response")
                setUniversityData(response)
            })
    }, [])
    return (
        <>
            <Navbar />
            {
                universityData.map(function(value, i){
                    return(
                        <>
                            <h5>{i}{ universityData[i].country}</h5>
                            <h1>{i}{ universityData[i].web_pages}</h1>
                        </>
                    )
                })
            }
            bb
        </>
    )
}

export default University_Data;