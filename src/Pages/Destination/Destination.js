import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar'
import moon from '../../Images/moon.svg'
import './des.scss'

const Destination = () => {
  return (
    <div className='destination'>
      <Navbar/>
        <div className ='heading'>
          <h4> <span>01</span> Pick your destination </h4>
        </div>
      <main className='hero-destination'>
        <div className='hero-dest-image'>
          <div>
            <img src={ moon } alt = 'destination image' className='dest-image'/>
          </div>
        </div>
        <div className = 'hero-dest-routes'>
          <div className='dest-routes'>
            <ul>
              <li>
                <NavLink to='#' className='hero-btn'>
                  Moon
                </NavLink>
              </li>
              <li>
                <NavLink to='#' className='hero-btn'>
                  Mars
                </NavLink>
              </li>
              <li>
                <NavLink to='#' className='hero-btn'>
                  Europa
                </NavLink>
              </li>
              <li>
                <NavLink to='#' className='hero-btn'>
                  Titan
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='dest-info'>
            <h1>Moon</h1>
            <h6>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</h6>
            <div className='dest-line' />
            <div className='dest-geo'>
              <div className='dist'>
                <h4> avg. distance</h4>
                <h1>225 mil.km</h1>
              </div>
              <div className='time'>
                <h4>Est. travel time</h4>
                <h1>9 months</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Destination
