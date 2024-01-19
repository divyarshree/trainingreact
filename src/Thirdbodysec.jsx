import React from 'react'

const Thirdbodysec = ({ cardbodies}) => {
    return(
        <div className=''>
            {cardbodies.map((body, index) => (
                <div key={index} className=''>
                    <div className='images'>
                        <img src={`assets/images/${body.images}`} ></img>
                        <p>{body.titles}</p>
                    </div>
                    </div>
            ))}
        </div>
    )
}

export default Thirdbodysec