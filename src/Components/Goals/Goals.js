import React from 'react'
import "./Goals.css"
import data from '../../Data/Data.json';

export default function Goals() {
  // return data.map((data) =>
  //   <>
  //   <h1 key={data.id}>Ce que vous allez mettre en pratique</h1>
  //     <ul key={data.id}>
  //       {data.goals.map((data) => (
  //         <li key={data.id}>{data}</li>
  //       ))}
  //     </ul>
  //   </>
  // )

  return (
    <div className='Goals'>
      <h1> Ce que vous allez mettre en pratique</h1>
      {data.map (( data )  => {
        return data.goals.map(( data, index ) => (
          <ul key={index}>
            <li key={index}>{data}</li>
          </ul>
        ))
      })}
    </div>
  )
}
