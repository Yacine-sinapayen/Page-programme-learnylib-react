import React, { useState } from 'react';
import './Plan.css';
import chevron from '../../assets/Chevron.svg';

export default function Plan({data}) {

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

                    <div key={index} className='program mrg-b10'>

                        <div onClick={() => {
                            toggleChapter(index);
                        }}
                            className="program-visible" >
                            <img className={toggle.includes(index) ? 'animatedDown mrg-r10' : 'mrg-r10'} src={chevron} alt="chevron down" />
                            <h3 className='program-visible-h3 border-bottom w100p'> {data.title} </h3>
                        </div>

                        {toggle.includes(index) && <p dangerouslySetInnerHTML={{ __html: data.description }} className='plan-description animate__animated animate__fadeIn '></p>
                        }
                        
                    </div>
                ))}

            </div>

        </section>
    )
}
