import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Form = () => {

  const navigate = useNavigate();
  const [ userName, setUserName ] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName)
    navigate('/chat')
  }

  return (
    <form className='home-container' onSubmit={handleSubmit}>
        <h2 className='home-header'>Sign in to Universalize</h2>
        <label htmlFor="username">Username</label>
        <input 
          type='text'
          minLength={6}
          name='username'
          id='username'
          className='home-input'
          value={userName}
          onChange={(e) => setUserName(e.target.value)} 
        />
        <button className='home-btn'>Sign In</button>
    </form>
  )
}

export default Form