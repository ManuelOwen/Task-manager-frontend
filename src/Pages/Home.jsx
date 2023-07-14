import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"

export default function Home() {
  return (
    <div className='homepage'>

      <div className='pages'>
  
  
  <Link to="/Register">
         <span>Sign up</span>
      </Link>
      <Link to="/Login">
   
         <span>Login</span>
      </Link>
      
        </div>

      <div className='description'>
        <h1>Welcome to our Task manager</h1>
        <h2>Manage your tasks with us and have ana excellent schedule</h2>
      </div>
      <div className='story'>
        <h1>Begin your Tasks by scheduling with us</h1>
        <h2> Task management can help either individual achieve goals,<br/> or groups of individuals collaborate and share knowledge for the accomplishment of collective goals.</h2>
      </div>
      <div className='start'>
        <button>GET STARTED WITH US</button>

      </div>
      </div>
    
  )
}
