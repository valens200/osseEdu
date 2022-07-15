import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import PopularCourses from '../components/PopularCourses'
import Technologies from '../components/Technologies'
import Youtube from '../components/Youtube'

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Technologies />
      <PopularCourses />
      <Youtube />
      <Footer />
    </div>
  )
}

export default Home
