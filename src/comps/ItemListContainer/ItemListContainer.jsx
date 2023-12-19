import React from 'react'
import './ItemLC.css'
const ItemListContainer = ({titulo, cuerpo}) => {
  return (
    <div className='card'>
      <div>
        <h1>{titulo}</h1>
        <p>{cuerpo}</p>
      </div>
    </div>
  )
}

export default ItemListContainer