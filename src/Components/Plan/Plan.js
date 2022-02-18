import React, { useState, useRef, useEffect } from 'react';
import './Plan.css';
import Chevron from '../../assets/Chevron.svg';
import data from '../../Data/Data.json';

export default function Plan() {

    const [toggle, setToggle] = useState(false);

    const toggleState = () => {
        setToggle(!toggle)
    }

    return (
        <div className='plan'>
            <h1>Programe de la formation</h1>
            {data.map (( data ) => {
                return data.program.map (( data ) => (
                    <>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                    </>
                ))
            })}
        </div>
    )
}
