import React from 'react'

export default function TeachersItems({data}) {
  return (
    <div className='teacher-container w75p'>

      <h1 className='center-content mrg-b30'>Qui sont vos conférenciers ?</h1>
        
    
      {data.teachers.map((teacher, index) => (

        <div className='teacher flex mrg-b20' key={index}>

          <div className="teacher-title-para ">
            <h3>{teacher.name}</h3>
            <p className='teacher-para'>{teacher.description}</p>
          </div>

        
          <div className='teacher-img-container mrg-l15 flex middle'>
          {/* Le lien de l'api pour écupérer les photos ne fonctionnne plus */}
            {/* <img className='teacher-img w200 ' src={'https://formations.learnylib.com/api/v1/uploads/public/teacher_' + teacher.id + '.jpg'} alt="teacher" /> */}
          </div>

        </div>
      ))}

    </div>

  )
}
