import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className ='pa2'>
        <input 
                className = 'pa3 ba b--green lighest-blue'
                type="search" 
                placeholder="Search Robots"
                onChange = {searchChange}>
                
        </input>
        </div>
    )
}

export default SearchBox;