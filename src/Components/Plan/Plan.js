import React, { useState } from 'react';
import './Plan.css';
import data from '../../Data/installation-liberale.json';
import chevron from '../../assets/chevron.svg';


export default function Plan() {

    const [toggle, setToggle] = useState([]);

    const toggleChapter = (index) => {
        let copy = [...toggle]
        if (!copy.includes(index)) {
            copy.push(index)
        } else {
            // console.log(copy.indexOf(index))
            copy.splice(copy.indexOf(index), 1)
        }
        console.log(copy)
        return setToggle(copy);
    }

    return (
        <section className='plan-section center-content mrg-t20 mrg-b20'>

            <div className="plan-container w75p flex column">

                <h1 className='self-center'>Programe de la formation</h1>
                {data.program.map((data, index) => (

                    <div key={index} className='program'>

                        <div onClick={() => {
                            toggleChapter(index);
                        }}
                            className="program-visible" >
                            <img className={toggle.includes(index) ? 'animatedDown' : ''} src={chevron} alt="chevron down" />
                            <h3 className='program-visible-h3 border-bottom w100p'> {data.title} </h3>
                        </div>

                        {toggle.includes(index) && <p className='animate__animated animate__fadeIn mrg-l30'> {data.description} </p>
                        }

                    </div>
                ))}

            </div>

        </section>
    )
}
