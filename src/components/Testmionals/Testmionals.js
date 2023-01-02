import React from 'react'
import { useState } from 'react'
import { testmionals } from '../../data'
import classes from './Testmionals.module.css'
const Testmionals = () => {

  const [active, setActive] = useState(0);
  console.log(active)
  const handleClick = (index) => {
    setActive(index)
  }

  return (
    <div className={classes.testmionals}>
    
     <h1 className='section-head'>Testmionals</h1> 
     
     { testmionals.map ( (tets, index) => active === index &&<section>
       <div className={classes.left}>
        <img src='' alt='Taha shabaan'/>
       </div>
       <div className={classes.right}>
        <p>{tets.desc}</p>
        <h3>{tets.name}</h3>
        {/* <h4>{test.title}</h4> */}
       </div>
      </section> )}

      <ul>
        {testmionals.map((tets, index) => <li 
          className = {active === index ?`
          ${classes.active}
          ${classes.item}`:`${classes.item}`}

        onClick={()=>handleClick(index)}></li>)
        }
      </ul>
    </div>
  )
}

export default Testmionals;