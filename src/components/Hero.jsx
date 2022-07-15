import React from 'react'
import NavBar from './NavBar'
import Snavbar from './Snavbar'

const Hero = () => {
  return (
    <div className='h-screen w-screen bg-homeWhite'>
      <Snavbar />
      <NavBar />
    </div>
  )
}

export default Hero
