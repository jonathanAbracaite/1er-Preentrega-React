import React from 'react'
import './navBar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <div className='navBar'>
      <div className="col2">
          <div className='col2'>logo</div>
          <div className='col2'>
            <CartWidget />
          </div>
      </div>
    </div>
    
  )
}

export default Navbar