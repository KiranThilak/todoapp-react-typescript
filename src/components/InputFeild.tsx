import React from 'react'
import './styles.css';
const InputFeild = () => {
  return (
   <form className='input'>
    <input type='input' placeholder='Enter a task' className='input__box'></input>
    <button className='input_submit' type='submit'>Go</button>
   </form>
   
  )
}

export default InputFeild