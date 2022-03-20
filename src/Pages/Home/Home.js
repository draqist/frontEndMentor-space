import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar'
import './home.scss'

const Home = () => {
  return (
    <div className = 'hero'>
      <Navbar />
      <main className='hero-explore'>
        <div className='hero-text'>
          <h4> So, you want to travel to </h4>
          <h1>space</h1>
          <h6>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</h6>
        </div>
        <div className='hero-btn'>
          <Link to = '/destination'>
            EXPLORE
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
