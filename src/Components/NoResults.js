import React from 'react';
import '../index.css';

const NoResults = () => {
      return (
        <div className='noResults'> 
          <h1 className='noResults h1'> No results found</h1>
          <p className='noResults p'>That search did not return any results.</p>
        </div>
      );
    }
export default NoResults;