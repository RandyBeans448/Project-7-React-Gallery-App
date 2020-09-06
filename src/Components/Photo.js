import React from 'react';
import '../index.css';

const Photo = props => {
    return (
    <div className='photo-container li'>
      <li>
        <img src={props.url} alt="" />
      </li>
    </div>
  )
}

export default Photo;