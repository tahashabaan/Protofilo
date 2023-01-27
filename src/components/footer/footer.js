import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Social from '../Home/Social'
import classes from './Footer.module.css'


const footer = () => {
  return (
    <div className={classes.footer}>
        <h2 className='section_title'>Simth</h2>
        <ul className={classes.list}>
           <li>
           <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-140}
              duration={700}>About</Link>

           </li>
           <li>
           <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-140}
              duration={700}>Skills</Link>
           </li>
           <li>
           <Link
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              offset={-140}
              duration={700}>Works</Link>
           </li>
           <li>
           <Link
              activeClass="active"
              to="concat"
              spy={true}
              smooth={true}
              offset={-140}
              duration={700}>Concat</Link>
           </li>
        </ul>

        <section>
           <Social/>
        </section>
        
    </div>
  )
}

export default footer
