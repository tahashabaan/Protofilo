import React from 'react'
import { BrowserRouter as Router, Routes, Route } 
from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Works from './components/Works/Works'
import Concat from './components/Concat/Concat';
import Error from './components/Error/Error';
import Skills from './components/Skills/Skills';
import Footer from './components/footer/footer'
import Testmionals from './components/Testmionals/Testmionals';
import classes from './App.module.css'


const App = () => {

  return (
    <Router>
      <Header/>

      <Routes>
        <Route path='/Protofilo' element={
         <>
          <Home/>
          <About/>
          <Skills/>
          <Works/>
          <Concat/>
          <Footer/>
          </>
        }/>
        
        <Route path='/about'   element={ <About/>}/>
        <Route path='/skills'  element={<Skills/>}/>
        <Route path='/works'   element={<Works/>}/>
        <Route path='/concat' element={<Concat/>}/>
        <Route path='/footer' element={<Footer/>}/>
    
        <Route path='/*'  element={<Error/>}/> 
      
     </Routes>
    </Router>
  )
}

export default App;