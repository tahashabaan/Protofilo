import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { projectNav, projectData } from '../../data';
import {BsGithub} from "react-icons/bs";
import classes from './Works.module.css';



const Works = () => {

  const [data, setData] = useState([])
  const [item, setItem] = useState({name:'all'})
  const [active, setActive] = useState(0)

  useEffect(() => {

    if( item.name.toLocaleLowerCase() === 'all') 
            setData(projectData)

     else { 
      const newData = projectData.filter ( project => project.category.toLocaleLowerCase() === item.name )
      setData(newData)
      }

  }, [item])

  console.log(data)

  console.log(item, active)

  const navHandleClick = (e, index) => {
   setItem({name:e.target.innerHTML})
   setActive(index)
  }

  return (
    <section className={classes.works}>
      <h1 className='section-head'>Portofilo</h1>
      <ul>
        {projectNav.map((item, index) => <li 
         key={index}  
         className={ active === index ? classes.active:''}
         onClick={(e)=> navHandleClick(e, index)}
        >
        {item.name}
        </li>)}
      </ul>

    <section className={classes.projects}>
        {data.map(data => <div className={classes.wrapper}>
        <img src={data.image}/>
         <ul>
          <li>
            <a href=''></a>
          </li>
          <li>
            <a href='#'>
              <BsGithub/>
            </a>
          </li>
         </ul>
      </div>
      )}
      </section>

    </section>
  )
}

export default Works