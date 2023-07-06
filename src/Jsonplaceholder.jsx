import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink, Link } from "react-router-dom";
import Navbar from "./Navbar";
//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Jsonplaceholder() {
    const [Data, setUpdate] = useState([])
    const [url, setUrl] = useState("")
    // const [show, setShow] = useState(false);
    const [addrShow, setaddrShow] = useState(false);
    const [compShow, setCompShow] = useState(false);
    
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [street, setStreet] = useState("")
    const [zip, setZip] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [work, setWork] = useState("")
    const [Error, setError] = useState("")

    console.log(Data, "Data")
    const handleClose = () => {
        setaddrShow(false);
        setCompShow(false)
    }

    const addressShow = (value) => {
        setaddrShow(true);
        setName(value.name)
        setCity(value.address.city)
        setStreet(value.address.street)
        setZip(value.address.zipcode)
    }

    const companyShow = (value) => {
        setCompShow(true);
        setCompanyName(value.company.name)
        setWork(value.company.bs)

    }

    useEffect(() => {
        let pp = fetch("https://jsonplaceholder.typicode.com/users")
            .then((resp) => {
                return resp.json();
            }).then((response) => {
                console.log(response, "response")
                setUpdate(response)
            }).catch((error)=>{
                setError(error.message)
            })
    }, [])

    return (
        <>
            {Error ? "404 Failed to fetch data" : ""}
            <Navbar />
            <div className="Cards-container">
                {
                    Data.map((value, i) => (
                        <div className="Cards">
                            <div className="Cards-detail">
                                <p>Name : {value.name}</p>
                                <p>Username : {value.username}</p>
                                <p>Number : {value.phone}</p>
                            </div>
                            <div className="Cards-button">
                                <button onClick={() => addressShow(value)}>Address Detail</button>
                                <Modal show={addrShow} onHide={handleClose} className="modal">
                                    <Modal.Header closeButton>
                                        <Modal.Title>Address Detail of Mr. <i>{name}</i> </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Street : {street} <br />City :  {city} <br /> ZipCode :  {zip}</Modal.Body>
                                    {/* <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer> */}
                                </Modal>

                                <button onClick={() => companyShow(value)}>Company Detail</button>
                                <Modal show={compShow} onHide={handleClose} className="modal">
                                    <Modal.Header closeButton>
                                        <Modal.Title>Address Detail of Mr. <i>{name}</i> </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Company name : {companyName} <br />Work :  {work}</Modal.Body>
                                </Modal>
                            </div>
                            <div className="website-button">
                                <button onClick={() => setUrl(`https:${value.website}`)}><a href={url} >Website</a></button>
                            </div>

                        </div>
                    )
                    )
                }
            </div>
            <br /> <br />
        </>
    )
}

export default Jsonplaceholder;