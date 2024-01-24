import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
   <>
    <div className='container'>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <nav>
            <img src=''/>
            
            <ul className='ul1'>
                <li>Home</li>
                <li>Box-Shadow</li>
                <li>Button</li>
                <li>Hover</li>
            </ul>

            <ul>
                  <li><button className='btn1'>About Us</button></li>
                  <li><button className='btn2'>Contact</button></li>
            </ul>            
        </nav>
        <div className="content">
            MAKE YOUR WEBSITES<br/> LOOK MORE <br/><span>ATTRACTIVE</span>
        </div>

    </div>
    <div className='btn3'>
        <button className='for-knowmore-btn'>Know More</button>
    </div>
   </>
  )
}

export default Navbar
