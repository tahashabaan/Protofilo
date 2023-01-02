import React from 'react'
import { skills } from '../../data';
import classes from './Skills.module.css'
const Skills = () => {
  return (
    <div className={classes.skills}>
      {skills.map(skill => 
      <div className={classes.wrapper}>
       <img src={skill.image}/>
      </div>
      
      )}
      
    </div>
  )
}

export default Skills;