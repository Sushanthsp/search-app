import React from 'react'
import './CardsStyle.scss'

function Cards({src,name}) {
  return (
    <div className="img-cards">
        <img src={src} alt="" className='img'/>
        <div className="text">{name}</div>
    </div>
  )
}

export default Cards