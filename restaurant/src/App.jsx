
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Banner from './components/Banner/Banner'
import WhyChoose from './components/WhyChoose/WhyChoose'
import About from './components/About/About'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
      <div className='overflow-x-hidden'></div>
        <Navbar/>
        <Hero/>
        <Banner/>
        <WhyChoose/>
        <About/>
        <Footer/>
    </>
  )
}

export default App