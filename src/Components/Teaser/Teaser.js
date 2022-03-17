import React, { useState } from 'react'
import "./Teaser.css"

export default function Teaser({ data }) {

  return (
    <>
      {data.teaser && (

        <div className='teaser-section dark-bg center-content h300 pdg-b15'>

          <iframe
            className='w75p'
            title={data.teaser}
            src={"https://player.vimeo.com/video/" + data.teaser + "?autoplay=1"}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen"
          >
          </iframe>

        </div>

      )}
    </>
  );
}

