import React, { useState } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import "./Timer.css"

import timerBlue from './assets/timer1.svg';
import questionBlue from './assets/question-blue.svg'
import timerGrey from './assets/timer1-grey.svg';
import questionGrey from './assets/question-grey.svg'
import close from './assets/close.svg'

export default function Timer(props) {

    const timeSpent = moment.duration(props.timeSpent, "seconds").format(" *h:mm");
    const duration = moment.duration(props.duration, "seconds").format(" *h:mm");

    const [modal, setModal] = useState(false);

    const [position, setPosition] = useState({});

    const toggleModal = (event) => {
        console.log(event)
        setPosition({
            left: event.clientX - 20 + 'px',
            top: event.clientY - 10 + 'px',
        })
        setModal(!modal)
    };

    return (
        <>
            <h1>Timer 1</h1>

            <div className='flex row'>

                <div className='flex middle'>

                    {duration === timeSpent ? 
                    <img className='w10' src={timerBlue} alt="" /> 
                    : 
                    <img className='w10' src={timerGrey} alt="" />
                    }


                    <p className={duration === timeSpent ? 'blue' : 'grey'}>  {timeSpent} / {duration} </p>

                    {duration === timeSpent ? 
                    <img onClick={event => toggleModal(event)} className='pointer w10' src={questionBlue} alt="" /> : 
                    <img onClick={event => toggleModal(event)} className='pointer w10' src={questionGrey} alt="" />
                    }

                </div>

                {modal && (
                    <div className="modal1 flex row top small" style={position}>
                        <img onClick={toggleModal} className='pointer w10' src={close} alt="Button fermeture de la modale" />

                        <div className="modal-content">
                            <p> Cet indicateur correspond aux nombres d'heures passées sur la formation par rapport aux nombres d'heures exigées par l'organisme.</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
