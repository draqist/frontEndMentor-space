import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/navbar'
import { getCrews } from '../../data'
import './crew.scss'

const Crew = () => {
  let crew = getCrews()
  const [data, setData] = useState(crew[0])
  return (
    <div className='crew'>
      <Navbar/>
        <div className ='crew-heading'>
          <h4> <span>02</span> meet your crew </h4>
        </div>
      <main className='hero-crew'>
        <div className = 'hero-crew-routes'>
          <div className='crew-info'>
            <div>
              <h3>{data.rank }</h3>
              <h1>{ data.name }</h1>
              <h6>{ data.bio }</h6>
            </div>
            {/* <div className='crew-geo'>
            </div> */}
              <div className='crew-routes'>
                <ul>
                  <li onClick = {()=>setData(crew[0])}>
                    <a href='#commander'>
                      <div className = 'circ'>
                      </div>
                    </a>
                  </li>
                  <li onClick = {()=>setData(crew[1])}>
                    <a href='#missionspecialist'>
                      <div className = 'circ'>
                      </div>
                    </a>
                  </li>
                  <li onClick = {()=>setData(crew[2])}>
                    <a href='#pilot'>
                      <div className = 'circ'>
                      </div>
                    </a>
                  </li>
                  <li onClick = {()=>setData(crew[3])}>
                    <a href='#flightengineer'>
                      <div className = 'circ'>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </div>
        <div className='hero-crew-image'>
          <div>
            <img src={ data.image} alt = 'crew' className='crew-image'/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Crew
