import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/navbar'
import './tech.scss'
import { getTech } from '../../data'

const Tech = () => {
  let tech = getTech()
  const [data, setData] = useState(tech[0])
  return (
    <div className='tech'>
      <Navbar/>
        <div className ='tech-head'>
          <h4> <span>03</span> space launch 101 </h4>
        </div>
      <main className='hero-tech'>
        <div className = 'hero-tech-routes'>
            <div className='tech-routes'>
              <ul>
              <li onClick = {() => setData(tech[0])}>
                  <a href = '#1'>
                    <div className = 'circle'>1</div>
                  </a>
                </li>
                <li onClick = {() => setData(tech[1])}>
                  <a href='#2'>
                    <div className = 'circle'>2</div>
                  </a>
                </li>
                <li onClick = {() => setData(tech[2])}>
                  <a href='#3'>
                    <div className = 'circle'>3</div>
                  </a>
                </li>
              </ul>
            </div>
            <div className='tech-info'>
              <h3>The terminology ...</h3>
              <h1>{data.mach}</h1>
              <h6>{data.info}</h6>
            </div>
          </div>
        <div className='hero-tech-image'>
          <div>
            <img src={ data.image } alt = 'tech' className='tech-image'/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Tech
