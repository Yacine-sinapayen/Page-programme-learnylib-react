import React, { useState } from 'react'
import "./Timer.css"


import timerBlue from './assets/timer1.svg';
import timerGrey from './assets/timer1-grey.svg';
import questionGrey from './assets/question-grey.svg'
import questionBlue from './assets/question-blue.svg'
import close from './assets/close.svg'

export default function Timer() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    const [modal2, setModal2] = useState(false);

    const toggleModal2 = () => {
        setModal2(!modal2)
    }

    return (
        <>
            <div>
                <h1>Timer 1</h1>
                
                <div className='flex middle'>
                    <img className='w10' src={timerGrey} alt="" />

                    <p className='grey'> 03:26 / 7:00 </p>

                    <img onClick={toggleModal} className='pointer w10' src={questionGrey} alt="" />
                </div>

                {modal && (
                    <div className="modal1 flex row top small">
                        <img onClick={toggleModal} className='pointer w10' src={close} alt="Button fermeture de la modale"/>

                        <div className="modal-content">
                            <p> Cette indicateur correspond au nombre d'heure passé sur la for mation par rapport au nombres d'heures exigées par l'organisme de formation</p>
                        </div>
                    </div>
                )}
            </div>

            <div className='mrg-t30'>
                <h1>Timer 2</h1>

                <div className='flex middle'>
                    <img className='w10' src={timerBlue} alt="" />

                    <p className='blue'> 07:00 / 7:00 </p>

                    <img onClick={toggleModal2} className='pointer w10' src={questionBlue} alt="" />
                </div>

                {modal2 && (
                    <div className="modal2 flex row top small">
                        <img onClick={toggleModal2} className='pointer w10 mrg-5' src={close} alt="Button fermeture de la modale"/>

                        <div className="modal-content">
                            <p> Cette indicateur correspond au nombre d'heure passé sur la for mation par rapport au nombres d'heures exigées par l'organisme de formation</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
