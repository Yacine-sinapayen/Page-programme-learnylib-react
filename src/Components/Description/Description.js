import React from 'react'
import "./Description.css"
import data from '../../Data/Data.json';

export default function Description() {
  return (
    <>
      <div className="description">
        <h1>Rejoignez une formation unique</h1>
        <h2>98% de satisfaction + icone</h2>
        {data.map(( data ) => {
          return (
            <p key={data.id} dangerouslySetInnerHTML={{ __html: data.description }}>
            </p>
        )
        })}
      </div>
    </>
  )
}
