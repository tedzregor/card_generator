import React from 'react'

const Card = ( {name, email, CardType } ) => {
    return (
        <div className='bg-light-green dib pa3 ma3 br4 shadow-5 grow'>
            <img alt='card' src={`https://robohash.org/${name}?set=set${CardType}`} style={{height:'300px', width:'300px'}} />
            <h1>{ name }</h1>
            <p>{ email }</p>
        </div>
    ) 
}

export default Card