import React from 'react'
import data from '../../../Data/data.json';

export default function TeachersItems() {
  return (
    <div className='teacher-container w75p'>

      <h1 className='center-content'>Qui sont vos conférenciers ?</h1>

      {data.teachers.map((teacher, index) => (

        <div className='teacher flex pdg-b15' key={index}>

          <div className="teacher-title-para">
            <h3>{teacher.name}</h3>
            <p>{teacher.description}</p>
          </div>

          <div className='teacher-img-container mrg-l15'>
            <img className='teacher-img w200 ' src={'https://formations.learnylib.com/api/v1/uploads/public/teacher_' + teacher.id + '.jpg'} alt="teacher" />
          </div>

        </div>
      ))}

    </div>

  )
}