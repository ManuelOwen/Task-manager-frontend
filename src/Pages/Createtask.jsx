import React from 'react'

import './Createtask.css'

export default function Createtask() {
  return (
    
    <div className='create'>
      <div className='body'>
      <div  className='search'>
        <input type="text"  placeholder='Search here'/>

      </div>
      <div className='task-title'>
        
        <input type="text" placeholder='Task Title' />

      </div>
      <div className='task-dates'>
        <label htmlFor="dates">date</label>
        <input type="calendar" placeholder='Start Date' />
        <input type="calendar" placeholder='Due Date' />
        
      </div>
      <div className='task-priority'> 

        <input type="radio" id="high" name="priority" value="high" />
        <label htmlFor="high">High</label>
     
      
        <input type="radio" id="medium" name="priority" value="medium" />
        <label htmlFor="medium">Medium</label>
      

        <input type="radio" id="low" name="priority" value="low" />
        <label htmlFor="low">Low</label>
      
       
        
      </div>
      <div className='task-title'>
        
        <input type="text" placeholder='Task Descrition' />
        
      </div>
      <div className='task-title'>
        
        <input type="text" placeholder='Task Category' />
        
      </div>
       
     <div className='task'>

     <div className='edit'>

        <button className='Edit'>Edit</button>
       
      </div>
      <div className='save'>
        <button className='save'> Save</button>
       
      </div>
     </div>
     </div>
    </div>
     
    
  )
}
