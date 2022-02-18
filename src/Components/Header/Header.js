import React from 'react'
import "./Header.css"
import data from '../../Data/Data.json';

export default function Header() {

  return (
     <div className="header">
     <h1>Learnylib</h1>
       {data.map (( data, index )  => {
         return (
           <React.Fragment key={data.id}>
             <h1 key={index.id}> {data.title} </h1>
             <p key={index.id}> {data.shortDescription} </p>
             <div key={index.id}> {data.supports[0]} </div>
             <div key={index.id}> {data.supports[1]} </div>
           </React.Fragment>
         )
       })}
     </div>
  )
}
