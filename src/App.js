import React from 'react'
import { BrowserRouter as Router, Routes, Route } 
from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home';
import About from './components/About/About';
import Works from './components/Works/Works'
import Concat from './components/Concat/Concat';
import Error from './components/Error/Error';
import Skills from './components/Skills/Skills';
import Testmionals from './components/Testmionals/Testmionals';
import classes from './App.module.css'


const App = () => {

  return (
    <Router>
      <Header/>
      {/* <Home/>
      <About/>
      <Concat/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/skills'  element={<Skills/>}/>
        <Route path='/works'  element={<Works/>}/>
        {/* <Route path='/tetsmionals'  element={<Testmionals/>}/> */}
        <Route path='/concat' element={<Concat/>}/>
        <Route path='/*'  element={<Error/>}/>
      
     </Routes>
    </Router>
  )
}

export default App;