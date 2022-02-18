import React from 'react'
import "./Teaser.css"
import data from '../../Data/Data.json';

export default function Teaser() {
  return (
    <>
     <div className="teaser">
     <h1>Id du Teaser : </h1>
       {data.map (( data)  => {
         return (
           <div key={data.id}>
             {data.teaser}
           </div>
         )
       })}
     </div>
    </>
  )
}
