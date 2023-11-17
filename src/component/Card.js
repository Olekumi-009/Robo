import React from 'react';

const Card = (props)=>{
    const {name , email, id} = props
    return(
        <div className='bg-light-green txt-center dib br3 ma2  grow '>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} ></img>
        <div className='tc nowrap   '>
            <h2>{name}</h2>
            <p >{email}</p>
        </div>
        </div>
    )

}
export default Card;

