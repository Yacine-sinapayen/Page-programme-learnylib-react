import React, { useState, useRef, useEffect} from 'react';
import './Plan.css';
import Chevron from './Chevron.svg';
// import { programData } from './data';

export default function Plan() {

    const [ toggle, setToggle ] = useState(false);

    const toggleState = () => {
        setToggle(!toggle)
    }

    return (
        <div className="programme">

            <div 
            onClick={toggleState} 
            className="programme-visible">
                <img src={Chevron} alt="chevron down" />
                <h2>Patie 1 : Présentation et philosophie</h2>
            </div>

            <div className="divider"></div>

            {toggle && <div 
            className= "animate__animated animate__fadeIn"
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam ducimus illo architecto repudiandae, consequatur animi corrupti omnis veritatis aut ex nobis itaque in odit error neque? Nemo, quisquam voluptatum!
                </p>

            </div>}

        </div>
    )
}
