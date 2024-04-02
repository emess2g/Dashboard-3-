import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'

const Header = () => {
  return (
    <header className='header'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

      <div className="menu-icon">
        <BsJustify className='icon'/>
      </div>
      <div className="header-left">
        <BsSearch className='icon' />

        <input type="text"
         placeholder='Search...'
         className='search-input'
         />
      </div>
      <div className="header-rignt">
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  )
}

export default Header
