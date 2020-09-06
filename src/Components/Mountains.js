import React from 'react';
import Photo from './Photo';
import '../index.css';

const Mountains = props => {
  const results = props.data; 
  let photos;
    photos = results.map(pic =>
      <Photo 
        url={'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg'}
        key={pic.id}
      />
    );

  
  return (
    <div className='photo-container'>
      <ul className='photo-container ul img'>
        {photos}
      </ul>
    </div>  
  )
}

export default Mountains;