import React from 'react'
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll} from 'react-scroll';
import {FaTimes}  from 'react-icons/fa'
import classes from './Nav.module.css'

 const Nav = () => {


  return (
    <nav className={classes.nav}>

       <ul>
          <li>
            <Link to='/Protofilo' className={classes.Link}>
              Home
            </Link>
            <i class="uil uil-home nav-ul"></i>
            
          </li>
          <li>
           <Link 
             activeClass="active"
             to="about"
             spy={true}
             smooth={true}
             offset={-140}
             duration={500}>
               About    
            </Link>
            <i class="uil uil-user nav-ul"></i>

          </li>
          <li>
           <Link 
             activeClass="active"
             to="skills"
             spy={true}
             smooth={true}
             offset={-140}
             duration={500}>
                Skills
            </Link>
           
            <i class="uil uil-servicemark nav-ul"></i>
          </li>

          <li>
           <Link 
             activeClass="active"
             to="works"
             spy={true}
             smooth={true}
             offset={-140}
             duration={500}>
              Works
            </Link>
            <i class="uil uil-briefcase nav-ul"/>
          </li>
          {/* <li>
            <Link to='/tetsmionals' className={classes.Link}>Testmionals</Link>
          </li> */}
          <li>
           <Link 
             activeClass="active"
             to="concat"
             spy={true}
             smooth={true}
             offset={-140}
             duration={500}>
              Concat
            </Link>
            <i class="uil uil-message nav-ul"></i>
          </li>
        </ul>
      
      </nav>
  )
}

export default Nav;