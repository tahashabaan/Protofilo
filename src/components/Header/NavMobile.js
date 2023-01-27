import React from 'react'
import { Link } from 'react-router-dom';
import {FaTimes}  from 'react-icons/fa'
import classes from './NavMobile.module.css'


 const NavMobile = ({menuOpening, HideMenuHandle}) => {
   return (
    <nav className={ menuOpening ? `${classes.nav_mobile}`:`${classes.nav_mobile} ${classes.revse}`}>
      <button className={classes.navBtn} onClick={HideMenuHandle}> 
       <FaTimes/>
      </button>
    
     <ul>
       <li onClick={HideMenuHandle}>
         <Link to='/Protofilo' className={classes.Link}>
          Home
         </Link>
       </li>

       <li onClick={HideMenuHandle}>
         <Link to='/about' className={classes.Link}>
          About
         </Link> 
       </li>
       <li>
            <Link to='/skills' className={classes.Link}>
             Skills
            </Link>
          </li>

       <li onClick={HideMenuHandle}>
         <Link to='/works' className={classes.Link}>
           Works
         </Link>
       </li>
       {/* <li onClick={HideMenuHandle}>
         <Link to='/testmionals' className={classes.Link}>
           Testmionals
         </Link>
       </li> */}

       <li onClick={HideMenuHandle}>
         <Link to='/concat' className={classes.Link}>
          Concat
         </Link>
       </li>
     </ul>
   </nav>
  )
}

export default NavMobile