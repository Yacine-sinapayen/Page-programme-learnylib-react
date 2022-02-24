import React from 'react'
import "./Header.css"
import data from '../../Data/data.json';
import Logo from '../../assets/Logo.svg';

export default function Header() {

  return (

    <section className="header-section  dark-bg center-content pdg-b30 pdg-t15">

      <div className="header w75p flex column">

        <div className="header-img-container self-center">
          <img src={Logo} alt="Logo learnylib" className='w150' />
        </div>

        <h1 className='text-center'> {data.title} </h1>

        <p className='mrg-b10'> {data.shortDescription} </p>

        <div className="header-button-container flex">
          <div className='white-bg w50 text-center light-bg' > {data.supports[0]} </div>
          <div className='header-btn-page-program white-bg w50 text-center light-bg mrg-l15'> {data.supports[1]} </div>
        </div>

      </div>

    </section>
  )
}
