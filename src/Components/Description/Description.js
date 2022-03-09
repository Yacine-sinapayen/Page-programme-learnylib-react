import React from 'react'
import "./Description.css"
import data from '../../Data/data.json';
import Emojie from '../../assets/Emojie.svg';

export default function Description() {

  return (

    <section className='description-section center-content mrg-b20'>

      <div className='description-container w75p flex column text-center'>

        <h1 className='description-container-h1'>Rejoignez une formation unique</h1>

        <div className="description-container-subtitle flex center ">
          <div className='flex center'>
            <h2 className='subtitle-h1'>98% de satisfaction </h2>
          </div>
            <img className='subtitle-img w50' src={Emojie} alt="Emojie merci" />

        </div>

        <p dangerouslySetInnerHTML={{ __html: data.description }}>
        </p>

      </div>

    </section>

  )
}
