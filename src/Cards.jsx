import React from "react";
import {Card} from './Data';

function Cards() {
    return (
        <>
            {
                Card.map(function (value) {
                    return (
                        <div className="pp">
                            <div className="Card-container">
                                <div className="Card-img">
                                    <img src={value.imgsrc} alt="" />
                                </div>
                                <div className="Card-txt">
                                    <h4>{value.title}</h4>
                                    <p>{value.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Cards;