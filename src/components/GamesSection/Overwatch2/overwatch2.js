import React from 'react';
import { Link } from 'react-router-dom'

const Overwatch2 = () => {
  return <div>
   <Link to='/gaming-section/overwatch-2'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>OVERWATCH2</h6>
           <img src='../../blog3.png' className='card c16'/>
           <span className='c20'>
          Games Section
           <br />
           <Link to='/gaming-section/overwatch-2'>
          <b>Know More</b>
          </Link>
           </span>
          </div>
</Link>          
         </div>
}

export default Overwatch2;
