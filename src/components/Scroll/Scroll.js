import React from 'react'

const Scroll = (props) => {
    return(
        <div style={{ overflowY:'scroll', border:'solid 5px black', height:'800px', margin:'3%'}}>
            { props.children }
        </div>
    )
}

export default Scroll