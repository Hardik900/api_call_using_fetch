import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function University_Data() {
    const [universityData, setUniversityData] = useState([]);
    console.log(universityData, "universityData")
    // console.log(universityData[1].country,"universityData")
    useEffect(() => {
        fetch("http://universities.hipolabs.com/search")
            .then((resp) => {
                return resp.json()
            }).then((response) => {
                // console.log(response[0].web_pages,"response")
                // console.log(response, "response")
                //console.log(response[0].country, "response")
                setUniversityData(response)
            }).catch((error)=>{
                console.log(error.message,"error")
            })
    }, [])
    return (
        <>
            <Navbar />
            <div className='university-container'>
            {
                universityData.slice(0,10).map(function (value, i) {
                    return (
                        <Card style={{ width: '18rem', margin:"15px", height:"300px"}}>
                            <Card.Body>
                                <Card.Text>Country <h5>{value.country}</h5></Card.Text>
                                <Card.Text>University Name<h5> {value.name}</h5>
                                </Card.Text>
                                <Card.Text>Domains Name <h5>{value.domains[0]}  {value.domains[1]}</h5> </Card.Text>
                                <Button variant="primary"><a style={{color:"white",textDecoration:"none"}} href={value.web_pages}>Web Pages</a></Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            </div>
        </>
    )
}

export default University_Data;