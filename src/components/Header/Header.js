import React, { useState } from 'react'
import { CgMenu } from "react-icons/cg";
import Nav from './Nav';
import NavMobile from './NavMobile';
import classes from './Header.module.css'


const Header = () => {
  
  const [ scrollDemo, setScrollDemo] = useState(0);
  const [menuOpening, setMenuOpening] = useState(false)
  
  // const pageWidth = window.matchMedia('(max-width: 768px)');
  // pageWidth.matches? setMenuOpening(true)
  
  
  // const shownavBar = () => {
  //   navRef.current.classList.toggle(classes.responsiveNav)
  // }

  const HideMenuHandle  = () => {
    setMenuOpening(false)
   }
   const showMenuHandle  = () => {
    setMenuOpening(true)
   }

   window.onscroll = () => { setScrollDemo(window.pageYOffset) }

   console.log(menuOpening)
 

  return (

    <header 
     className ={ scrollDemo && !menuOpening  ? 
      `${classes.active_head }
       ${classes.head}`:`${classes.head} ${classes.active_head_2 }`}>

      {!menuOpening && <h1> Taha Shabaan </h1>}
      <Nav/>
       {menuOpening && <NavMobile
        HideMenuHandle={HideMenuHandle}
        menuOpening={menuOpening}
        />}
       {!menuOpening && <button className={classes.navBtn} 
         onClick={showMenuHandle}>
         <CgMenu/>
         </button>}
     </header>
  )
}

export default Header;