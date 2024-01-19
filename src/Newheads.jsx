import React from 'react'

const Newheads = ({imagepath}) => {
    const headerlogo = `assets/images/${imagepath}`;
    return(
        <div>
            <img src={headerlogo} alt=""></img>
        </div>
    )
}

export default Newheads