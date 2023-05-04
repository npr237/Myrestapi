import React from 'react'
import {NavLink} from 'react-router-dom';

const Errorpage = () => {
  return (
    <>
      <div id='notfound'>
        <div className='notfound'>
            <div className='not-404'>
                <h1>404</h1>
            </div>
            <h2>We are sorry page not found!</h2>
            <p className='mb-5'>the page you are looking for might not be in the given route please go to the 
            defined route</p>
            <NavLink to='/'>Back to Homepage</NavLink>
        
      
    </div>
    </div>
    </>
  )
}

export default Errorpage
