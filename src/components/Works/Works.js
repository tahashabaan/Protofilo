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

    <section className={`${classes.works} pdTp`} id="works">

      <h1 className='section_title'>Portofilo</h1>
      <span className='section_subtitle'>MY Works</span>

      <ul className={`${classes.project_nav} pdTp`}>
        {projectNav.map((item, index) => <li 
         key={index}  
         className={ active === index ? classes.active:''}
         onClick={(e)=> navHandleClick(e, index)} >
          {item.name}
        </li>)}
      </ul>

      <section className={classes.projects}>

       {
        data.map( data => 
        <div className={classes.wrapper}>
         <img src={data.image}/>
         <h3 className='section_title'>{data.category}</h3>
         <p>{data.description}</p>
        
        <div className={classes.demo}>
         <ul>
           <li>
            <a href={data.demo} target='_blank'> 
              <i class='bx bxl-github'></i>
             </a>
           </li>


           <li>
            <a href={data.url} target='_blank'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"></path></svg>
            </a>
           </li>

          </ul>
        </div>

        </div>   )}
     </section>

    </section>
  )
}

export default Works