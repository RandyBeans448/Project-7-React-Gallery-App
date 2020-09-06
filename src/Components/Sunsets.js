import React from 'react';
import '../index.css';
import Photo from './Photo';
//Set out each Sunsets like PhotoList and set the Photo component the same. 
const Sunsets = props => {
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


export default Sunsets;

