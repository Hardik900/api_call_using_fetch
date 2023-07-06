import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';


function Timer(){
    const [updatehour, setupdatehour] = useState("")
    const [updatemin, setupdatemin] = useState("")
    const [updatesec, setupdatesec] = useState("")
    let timer = new Date();
    let hour = timer.getHours();
    let min = timer.getMinutes();
    let sec = timer.getSeconds();
    function changeSec(){
        setupdatesec(sec)
        setupdatehour(hour)
        setupdatemin(min)
    }
    setTimeout(changeSec, 1000);

    
    return(
        <>
            {/* <Navbar /> */}
            <div className='timer'>
                <div className="hour">{updatehour} hour</div>
                <div className="hour">{updatemin} min</div>
                <div className="hour">{updatesec} second</div>
            </div>
        </>
    )
}

export default Timer;