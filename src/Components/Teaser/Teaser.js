import React from 'react'
import "./Teaser.css"
import data from '../../Data/data.json';

export default function Teaser() {
  return (
    <div className='teaser-section dark-bg center-content pdg-b15'>
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
  );
}

