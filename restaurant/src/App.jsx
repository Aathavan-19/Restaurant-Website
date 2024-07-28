// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//        <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//     </>
//   )
// }

// export default App
import React from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero/Hero'
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
    </>
  )
}

export default App