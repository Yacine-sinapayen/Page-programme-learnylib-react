import React from 'react'
import "./Description.css"
import data from '../../Data/data.json';
import Emojie from '../../assets/Emojie.svg';

export default function Description() {
  
  return (

    <section className='description-section center-content'>

      <div className='description-container w75p center-content flex column'>

        <h1 className='description-container-h1'>Rejoignez une formation unique</h1>

        <div className="description-container-subtitle flex row">
          <h2 className='subtitle-h1'>98% de satisfaction </h2>
          <img className='subtitle-img w50' src={Emojie} alt="Emojie merci" />
        </div>

        <p dangerouslySetInnerHTML={{ __html: data.description }}>
        </p>

      </div>

    </section>
  )
}
