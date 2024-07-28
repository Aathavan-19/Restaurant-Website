
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Banner from './components/Banner/Banner'
import WhyChoose from './components/WhyChoose/WhyChoose'


const App = () => {
  return (
    <>
      <div className='overflow-x-hidden'></div>
        <Navbar/>
        <Hero/>
        <Banner/>
        <WhyChoose/>
    </>
  )
}

export default App