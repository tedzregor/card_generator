import React from 'react'

const SearchField = ({ searchCard }) => {
    return(
        <div className='dib'>
            <input 
                className='ma3 pa3 bg-light-green' 
                type='search' 
                placeholder='Search' 
                onChange={ searchCard }
            />
        </div>
    )
}

export default SearchField