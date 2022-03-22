import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar'
import doug from '../../Images/doug.svg'
import './crew.scss'

const Crew = () => {
  return (
    <div className='crew'>
      <Navbar/>
        <div className ='crew-heading'>
          <h4> <span>02</span> meet your crew </h4>
        </div>
      <main className='hero-crew'>
        <div className = 'hero-crew-routes'>
          <div className='crew-info'>
            <h3>commander</h3>
            <h1>Douglas Hurley</h1>
            <h6>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</h6>
            <div className='crew-geo'>
              <div className='crew-routes'>
                <ul>
                  <li>
                    <NavLink to='#' className='hero-btn'>
                      <div className = 'circ'>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='#' className='hero-btn'>
                      <div className = 'circ'>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='#' className='hero-btn'>
                      <div className = 'circ'>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='#' className='hero-btn'>
                      <div className = 'circ'>
                      </div>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='hero-crew-image'>
          <div>
            <img src={ doug } alt = 'crew' className='crew-image'/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Crew
