import React, { useEffect, useRef } from 'react';
import Social from './Social';
import Typed from 'typed.js';
import image from '../../assests/taha.jpeg'
import classes from './Home.module.css'


 const Home = () => {

  const el= useRef(null);
  useEffect(()=>{

    const typed = new Typed(el.current, {

      strings: ["Hi, i'm' Taha Shabaan!"],
      typeSpeed:100,
      startDelay:50,
      backSpeed:100,
      backDelay:60,
      loop:true,
      showCursor:false
      // smartBackspace:true,
      
    });


  return  () => {
      typed.destroy();
  }
  
  }, [])
  


  return (
   <>
     <div className={classes.home}>
      <section className={classes.left}>
       <h2 ref={el}></h2>
       <p> 
          I am a self-taught web developer who is passionate about programming in general and especially web development.
       </p>
       <button className={classes.btn}>
        <a href='#concat'> 
          Say Hello <i class="uil uil-message"/> 
        </a>
        </button>
      </section>

      <section className={`${classes.right}`}>
        {/* https://news.illinois.edu/files/6367/237975/72998.jpg */}
         <img  src={image}  alt="home__image"/>
      </section>
        
     </div>
   </>
  )
}
export default Home