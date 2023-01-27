import React from 'react'
import Card from '../../UI/Card';
import classes from './Skills.module.css';


const Skills = () => {
  return (

    <section className="pdTb" id="skills">
       <h3 className='section_title'>My Skills</h3>
       <p className='section_subtitle'>My Technical level</p>

       <div className={classes.skills_container}>

        <Card className={classes.skills_content}>
         <h3 className={classes.skills_title}>Basics</h3>
         
          <div className={classes.skills_group}>

          <div className={classes.skills_data}>
           <i class='bx bxl-c-plus-plus'></i>
           <div>
             <h3 className={classes.skills_name}>c++</h3>
             <span className={classes.skills_des}>basics</span>
           </div>
          </div>

          <div className={classes.skills_data}>
           <i class='bx bxl-java'></i>
           
           <div>
             <h3 className={classes.skills_name}>OOP With Java </h3>
             <span>basic</span>
           </div>
          </div>

          <div className={classes.skills_data}>
            <i class='bx bx-badge-check'></i>
           
           <div>
             <h3 className={classes.skills_name}>Data strucure </h3>
             <span>basic</span>
           </div>
          </div>

          <div className={classes.skills_data}>
            <i class='bx bx-badge-check'></i>
           
           <div>
             <h3 className={classes.skills_name}>Alogrithm </h3>
             <span>basic</span>
           </div>
          </div>

          <div className={classes.skills_data}>
            <i class='bx bx-badge-check'></i>
           
           <div>
             <h3 className={classes.skills_name}>Firebase</h3>
             <span>basic</span>
           </div>
          </div>

         </div>

        </Card>

        <Card className={classes.skills_content}>
          
         <h3 className={classes.skills_title}>Front end</h3>

        <div className={classes.skills_group}>

         <div className={classes.skills_data}>
          <i class='bx bxl-html5'></i>
  
        <div>
         <h3 className={classes.skills_name}>Html</h3>
         <span>advanced</span>
       </div>
        </div>

       <div className={classes.skills_data}>
        <i class='bx bxl-css3'></i>
        <div>
          <h3 className={classes.skills_name}>Css </h3>
          <span>advanced</span>
        </div>
       </div>

     <div className={classes.skills_data}>
      <i class='bx bxl-javascript'></i>
  
      <div>
       <h3 className={classes.skills_name}>Javascript </h3>
       <span>immeridata</span>
      </div>
     </div>

    <div className={classes.skills_data}>
      <i class='bx bxl-react'></i>
     <div>
       <h3 className={classes.skills_name}>React</h3>
       <span>advanced</span>
     </div>
    </div>

    <div className={classes.skills_data}>
     <i class='bx bxl-redux'></i>
     <div>
       <h3 className={classes.skills_name}>Redux</h3>
       <span>basic</span>
     </div>
    </div>

   <div className={classes.skills_data}>
   <i class='bx bxl-firebase'></i>
  
    <div>
     <h3 className={classes.skills_name}>Firebase</h3>
     <span>basic</span>
    </div>
 </div>

</div>


        </Card>

       </div>
    
      
    </section>
  )
}

export default Skills;