import React from 'react';

const SearchBox= ({searchfield, searchChange})=>{
    return (
        <input 
        className='pa2 bg-light-blue'
         type='search'
          placeholder='search robot'
          onChange={searchChange}
          />
)
}
   export default SearchBox;