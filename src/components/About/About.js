import React from 'react';
import classes from './About.module.css';
import CV from '../../assests/Taha_Shabaan_Resume.pdf';
import image from '../../assests/taha.jpeg';



 const About = () => {
   return (
    <div className={`${classes.about} pdTb`} id='about'>
     <h1 className='section_title'> About Me </h1>
     <span className="section_subtitle">My introduction</span>
     <div className='section_container'>
      <section className={classes.left}>
        {/* https://news.illinois.edu/files/6367/237975/72998.jpg */}
         <img  
           src={image} 
           className="raduis_img"
           alt="home__image"/>

       </section>

      <section className={`${classes.right} pdTb`}>
        <h3></h3>
        <p>
          I'm frontend developer, I can create web pages with UI/UX <br/> I have one year of experience build it .
        </p>
       </section>

       <button className={classes.button}>
        <a download="" href={CV}>Download CV</a>
       </button>
       </div>
     </div>

  )
}

export default About
