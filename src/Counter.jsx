import React, { useState } from 'react';
//import Navbar from './Navbar';

function Counter() {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter+1)
    }

    const decrement = () => {
        setCounter(counter-1)
    }
    return (
        <>
            {/* <Navbar /> */}
            <div className="counter-container">
                <div className='counter'>
                    <button className='incr' onClick={() => { increment() }}>+</button>
                    <div className='data'>{counter}</div>
                    <button className='decr' onClick={()=>counter > 0 && decrement() }>-</button>
                    {/* {counter>0 ? : <button className='decr'>-</button>} */}
                </div>
            </div>
        </>
    )
}

export default Counter;