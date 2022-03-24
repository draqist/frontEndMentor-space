import React from 'react'
import './navbar.scss'
import logo from '../../Images/logo.svg'
import { NavLink } from 'react-router-dom'
import {FcMenu} from 'react-icons/fc'

const Navbar = () => {
  return (
    <div className = 'nav'>
      <div>
        <img src = {logo} alt = 'logo' className = 'logo'/>
      </div>
      <div className = 'navroutes'>
        <div className='line'/>
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
              <NavLink to = '/tech'> 
                <span>03</span> TECHNOLOGY 
              </NavLink>
            </li>
          </ul>
        </div>
          <div className = 'menu'>
            <FcMenu/>
          </div>
      </div>
    </div>
  )
}

export default Navbar
