import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/navbar'
import './des.scss'
import { getDestinations } from '../../data'

const Destination = () => {
  let destination = getDestinations()
  const [data, setData] = useState(destination[0])

  return (
    <div className='destination'>
      <Navbar/>
        <div className ='heading'>
          <h4> <span>01</span> Pick your destination </h4>
        </div>
      <main className='hero-destination'>
        <div className='hero-dest-image'>
          <div>
            <img src={data.image} alt = 'destination image' className='dest-image'/>
          </div>
        </div>
        <div className = 'hero-dest-routes'>
          <div className='dest-routes'>
            <ul>
              <li onClick= {() => setData(destination[0])}>
                <a href= '#0'>
                  Moon
                </a>
              </li>
              <li onClick= {() => setData(destination[1])}>
                <a href='#0'>Mars</a>  
              </li>
              <li onClick= {() => setData(destination[2])}>
                  <a href='#0'>Europa</a>
              </li>
              <li onClick= {() => setData(destination[3])}>
                  <a href='#0'>Titan</a>
              </li>
            </ul>
          </div>
          <div className='dest-info'>
            <h1>{data.name}</h1>
            <h6>{data.brief}</h6>
            <div className='dest-line' />
            <div className='dest-geo'>
              <div className='dist'>
                <h4> Avg. Distance</h4>
                <h1>{data.avg_distance}</h1>
              </div>
              <div className='time'>
                <h4>Est. travel time</h4>
                <h1>{data.est_travel}</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Destination
