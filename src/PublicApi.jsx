import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PublicApi() {
    const [publicData, setpublicData] = useState([]);
    console.log(publicData, "publicData")
    // console.log(universityData[1].country,"universityData")
    useEffect(() => {
        fetch("https://api.publicapis.org/entries")
            .then((resp) => {
                return resp.json()
            }).then((response) => {
                console.log(response, "response")
                setpublicData(response.entries)
            })
    }, [])
    return (
        <>
            <Navbar />
            <div className='university-container'>
            {
                publicData.slice(0,10).map(function (value, i) {
                    return (
                        <Card style={{ width: '18rem', margin:"15px", height:"300px"}}>
                            <Card.Body>
                                <Card.Text>Api <h5>{value.API}</h5></Card.Text>
                                <Card.Text>Category <h5>{value.Category}</h5></Card.Text>
                                <Card.Text>Description <h5>{value.Description}</h5></Card.Text>
                                <Button variant="primary"><a style={{color:"white",textDecoration:"none"}} href={value.Link}>Website</a></Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            </div>
        </>
    )
}

export default PublicApi;