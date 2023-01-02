import React from 'react'
import { Link } from 'react-router-dom';
import {FaTimes}  from 'react-icons/fa'
import classes from './Nav.module.css'

 const Nav = () => {
  return (
    <nav className={classes.nav}>
       <ul>
          <li>
            <Link to='/' className={classes.Link}>
             Home
            </Link>
          </li>
          <li>
            <Link to='/about' className={classes.Link}>
             About
            </Link>
          </li>
          <li>
            <Link to='/skills' className={classes.Link}>
             Skills
            </Link>
          </li>

          <li>
            <Link to='/works' className={classes.Link}>
              Works
            </Link>
          </li>
          {/* <li>
            <Link to='/tetsmionals' className={classes.Link}>Testmionals</Link>
          </li> */}
          <li>
            <Link to='/concat' className={classes.Link}>
             Concat
            </Link>
          </li>
        </ul>
      
      </nav>
  )
}

export default Nav;