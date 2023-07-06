import React from "react";
import {Data} from './Data'
function Tabl(){
    return(
        <>
            <table className="table" border="2px solid black">
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Subject</th>
                    <th>College ID</th>
                </tr>
                {
                    Data.map(function(Data,i){
                        return(
                            <tr>
                            <td>{Data.Name}</td>
                            <td>{Data.class}</td>
                            <td>{Data.subject}</td>
                            <td>{Data.college_id}</td>
                        </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Tabl