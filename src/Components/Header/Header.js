import React from 'react'
import "./Header.css"
import Logo from '../../assets/Logo.svg';
import arrow from '../../assets/arrow.svg';

export default function Header({data}) {

  return (

    <section className="header-section  dark-bg center-content pdg-b30 pdg-t15">

      <div className="header w75p flex column">

        <div className="header-img-container w100p flex middle">
          <img className='header-img-arrow w30' src={arrow} alt="Logo learnylib" />
          <img className='w150 self-center' src={Logo} alt="Logo learnylib" />
        </div>

        <h1 className='header-title'> {data.title} </h1>

        <p className='header-description mrg-b10'> {data.shortDescription} </p>

        <div className="header-button-container flex">

          {data.supports.map((data, index) => (
            <div key={index} className='white-bg w50 text-center light-bg mrg-5' > {data.toUpperCase()} </div>
          ))}

        </div>

      </div>

    </section>
  )
}
