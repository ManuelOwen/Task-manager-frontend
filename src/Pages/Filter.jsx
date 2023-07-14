import React from 'react'
import './Filter.css'

export default function Filter() {
  return (
    <div className='fil'>
      <div className='sort'>
      
        <div className='filter'>
        
        <h2>Development</h2>
       
        <p>Front end development is always moving forward. You'll never fall behind with the latest updates.</p>
        {/* <button className='bfit'>filter</button>
        <button className='bsort'>Sort</button> */}
        </div>
        <div className='sot'>
        <div className='filter'>
          <h2>Design</h2>
          <p>Tips, tutorials, and more to keep you equipped and up to date in the ever evolving world of design.</p>
        <button className='bfit'>filter</button>
        <button className='bsort'>Sort</button>
        </div>
        </div>
      </div>
    </div>
  )
}
