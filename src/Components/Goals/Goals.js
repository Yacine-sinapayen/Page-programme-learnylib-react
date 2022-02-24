import React from 'react'
import "./Goals.css"
import data from '../../Data/data.json';
import check from '../../assets/check.svg';

export default function Goals() {

  return (

    <section className='goals-section center-content light-bg pdg-t15 pdg-b15'>

      <div className='description-container w75p flex column center-content'>

        <h1> Ce que vous allez mettre en pratique</h1>

        <div>
          {data.goals.map((data, index) => (
            <div key={index} className='flex'>
              <img src={check} alt="check" />
              <p>{data}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
