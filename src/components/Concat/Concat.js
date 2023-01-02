import React from 'react'
import { useRef } from 'react'
import classes from './Concat.module.css'
const Concat = () => {
  const nameRef = useRef('');
  const emailRef = useRef('')
  const subjectRef = useRef('')
  const massageRef = useRef('')
  console.log()

  const submitHanlder = (e) => {

    e.preventDefault()
    const dataUser ={ 
      name:nameRef.current.value,
      email:emailRef.current.value,
      subjec:subjectRef.current.value,
      massage:massageRef.current.value
    }

    nameRef.current.value=" "
    emailRef.current.value=" "
    subjectRef.current.value=" "
    massageRef.current.value=" "
    console.log(dataUser)
  }
  return (

    <section id='concat' className={classes.contact}>
     <h1>Concat me</h1>
     <p></p>
     <div className={classes.wrapper}>
     <div className={classes.left}></div>
     <div className={classes.right}>
      <form 
      className={classes.form}
      onSubmit={submitHanlder}
      >
        <div className={classes.input}>
         <input 
         type='text' 
         placeholder='Your Name'
         ref={nameRef}
         />
         <input 
         type='email'
         placeholder='Email'
         ref={emailRef}
         />
         </div>
         <input 
           type='text' 
           placeholder='subject' 
           className={classes.subject}
           ref={subjectRef}
         />
         <textarea 
          placeholder='Massage'
          ref={massageRef}
         />
         <button>Send Massage</button>
      </form>
     </div>
     </div>
    </section>
  )
}

export default Concat
