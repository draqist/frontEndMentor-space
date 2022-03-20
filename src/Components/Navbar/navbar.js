import React from 'react'
import './navbar.scss'
import logo from '../../Images/logo.svg'
import line from '../../Images/line.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className = 'nav'>
      <div>
        <img src = {logo} alt = 'logo' className = 'logo'/>
      </div>
      <div className = 'navroutes'>
        <div className='line'>
          
        </div>
        <div className='routes'>
          <ul>
            <li>
              <NavLink to = '/'> 
                <span>00</span> HOME
              </NavLink>
            </li>
            <li>
              <NavLink to = '/destination'> 
                <span>01</span> DESTINATION 
              </NavLink>
            </li>
            <li>
              <NavLink to = '/crew'> 
                <span>02</span> CREW 
              </NavLink>
            </li>
            <li>
              <NavLink to = '/technology'> 
                <span>03</span> TECHNOLOGY 
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
