import React from 'react'
import "./Goals.css"
import check from '../../assets/check.svg';

export default function Goals({data}) {

  return (

    <section className='goals-section center-content light-bg pdg-t20 pdg-b20'>

      <div className='description-container w75p flex column '>

        <h1 className='self-center'> Ce que vous allez mettre en pratique</h1>

        <div>
          {data.goals.map((data, index) => (
            <div key={index} className='flex'>
              <img className ="mrg-r10" src={check} alt="check" />
              <p>{data}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
