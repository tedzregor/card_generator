import React from 'react'
import Card from '../Card/Card'

const CardList = ({ Cards, CardType }) => {
    return(
        <div>
            {
                Cards.map((card) => {
                    return <Card key={card.id} name={card.name} email={card.email} CardType={CardType} />
                })
            }
        </div>
    )
}

export default CardList