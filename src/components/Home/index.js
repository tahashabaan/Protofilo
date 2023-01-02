import React from 'react'
import About from '../About/About'
import Concat from '../Concat/Concat'
import Skills from '../Skills/Skills'
import Testmionals from '../Testmionals/Testmionals'
import Works from '../Works/Works'
import Home from './Home'

const index = () => {
  return (
    <main>
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      {/* <Testmionals/> */}
      <Concat/>
    </main>
  )
}

export default index