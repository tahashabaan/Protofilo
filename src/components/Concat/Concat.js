import React from 'react'
import { useRef } from 'react'
import Card from '../../UI/Card'
import classes from './Concat.module.css';



const Concat = () => {

  const nameRef = useRef('');
  const emailRef = useRef('')
  const subjectRef = useRef('')
  const massageRef = useRef('')


  const submitHanlder = (e) => {

    e.preventDefault()
    const dataUser ={ 
      name:nameRef.current.value,
      email:emailRef.current.value,
      subjec:subjectRef.current.value,
      massage:massageRef.current.value
    }

    console.log(dataUser);

  }

  return (

    <section id='concat' className={classes.contact}>

     <h1 className='section_title'>Get In Touch</h1> 
     <span className='section_subtitle'>Concat Me</span>

     <div className={`${classes.wrapper} pdTp`}>
     {/* <div className={classes.left}>
      
     </div> */}

     <div className={classes.right}>
      <form className={classes.form} onSubmit={submitHanlder}>

       <div className={classes.input}>
        <label htmlFor='name'>Name:</label>
        <input 
         id='name'
         type='text' 
         placeholder='enter full Name'
         ref={nameRef} />
        </div>

        <div className={classes.input}>
        <label htmlFor='email'>mail:</label>
        <input
         id='email' 
         type='email' 
         placeholder='enter Your email'
         ref={emailRef} />
        </div>

        <div className={classes.input}>
        <label htmlFor='subject'>subjec:</label>
        <input 
         id='subject'
         type='text' 
         placeholder='enter your subject'
         ref={nameRef} />
        </div>

         <textarea className={classes.message}
          placeholder='enter your massage'
          ref={massageRef} />

         <button className={classes.concat_btn}>Send Massage</button>

      </form>
     </div>
     </div>
    </section>
  )
}

export default Concat
