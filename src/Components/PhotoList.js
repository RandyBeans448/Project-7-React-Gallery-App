import React from 'react';
import Photo from './Photo';
import '../index.css';
import NoResults from './NoResults';

const PhotoList = props => {
  const results = props.data; 
  let photos;
  if(results.length > 0) {
    photos = results.map(pic =>
      <Photo 
        url={'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg'}
        key={pic.id}
      />
      );
  } else {
    photos = <NoResults />
  }
  
  return (
    <div className='photo-container'>
      <ul className='photo-container ul img'>
        {photos}
      </ul>
    </div>  
  )
}

export default PhotoList;