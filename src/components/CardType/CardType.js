import React from 'react'

const CardType = ({ selectCardType }) => {
    return(
        <div className='dib'>
              <select className='bg-washed-green pa2 ma2 br5' name="cats" id="cats" onChange={selectCardType}>
                <option value="robot">Robot</option>
                <option value="monster">Monster</option>
                <option value="disheads">Head</option>
                <option value="cat">Cats</option>
            </select>
        </div>
    )
}

export default CardType