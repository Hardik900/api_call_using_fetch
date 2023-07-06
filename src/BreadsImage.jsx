import React, { useEffect, useState } from 'react'
// import { Nav } from 'react-bootstrap'
import Navbar from './Navbar'

function BreadImage() {
    const [image, setImage] = useState("")
    const [Error, setError] = useState("")

    useEffect(() => {
        let BreadsData = fetch('https://dog.ceo/api/breeds/image/random').then((resp) => {
            return resp.json()
        }).then((response) => {
            console.log(response)
            setImage(response.message)
        }).catch((error)=>{
            setError(error.message)
        })
    },[])
    return (
        <>  
            {Error ? "404 Failed to fetch the data" : ""}
            <Navbar />
            <div className='img-container'>
                <img src={image} alt="Image not found"/>
            </div>
        </>
    )
}

export default BreadImage;