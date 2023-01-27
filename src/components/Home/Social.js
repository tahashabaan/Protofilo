import React from 'react'
import classes from './Social.module.css'



const Social = () => {
  return (
    <ul className={classes.social}>

      <li><a href='https://www.linkedin.com/in/taha-shabaan-350112221/' target='_blank'>
        <i class="uil uil-linkedin"></i>
      </a></li>

      <li><a href='https://github.com/tahashabaan' target='_blank'>
        <i class="uil uil-github"></i>
      </a></li>
      {/* <a href="tel:123-456-7890">123-456-7890</a> */}
      <li><a href='te:01123522176' target='_blank'>
        <i class="uil uil-telegram"></i>
      </a></li>
    </ul>
  )
}

export default Social