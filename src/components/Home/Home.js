import React from 'react'
import Works from '../Works/Works'
import About from '../About/About'
import Concat from '../Concat/Concat'

import classes from './Home.module.css'
import Testmionals from '../Testmionals/Testmionals'
import { Outlet } from 'react-router-dom'
 const Home = () => {
  return (
   <>
     <div className={classes.home}>
       <h4 className={classes.myname}>
        Hey, I'm Taha shabaan 
           
        <span>Student Facutly Of Engineer</span>
       </h4>
        <h1 className={classes.logo}> 
         I Bulid && Design <br/> Web Interfaces. 
        </h1>
        {/* <p>Student Facutly Of Engineer</p> */}
        <button className={classes.href}>
           <a href='#concat'>work with me</a>
        </button>
        <Outlet/>
     </div>
   </>
  )
}
export default Home