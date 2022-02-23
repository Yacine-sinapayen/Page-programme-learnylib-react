import React from 'react'
import "./Header.css"
import data from '../../Data/data.json';
import Logo from '../../assets/Logo.svg';

export default function Header() {

  return (

    <section className="header-section  dark-bg center-content pdg-b15">

      <div className="header w75p flex column">

        <div className="header-img-container self-center">
          <img src={Logo} alt="Logo learnylib" className='w150' />
        </div>

        <h2 className='text-center'> {data.title} </h2>

        <p> {data.shortDescription} </p>

        <div className="header-button-container flex ">
          <div className='white-bg w50 text-center light-bg' > {data.supports[0]} </div>
          <div className='header-btn-page-program white-bg w50 text-center light-bg mrg-l15'> {data.supports[1]} </div>
        </div>

        {/* {data.supports.map((data, index) => (
          <div key={index} className='white-bg w50 text-center light-bg mrg-5'> {data.supports} </div>
        ))} */}

      </div>

    </section>
  )
}
