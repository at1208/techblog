import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const Top5Under60000 = () => {
  return <div>  
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>Top 5 Gaming Laptops Under 60000</h6>
           <img src='../../blog2six.jpg' className='card c16'/>
           <span className='c20'>

           <br />
           <Link to='laptops/top-5-gaming-laptops-under-rs60000'>
          <b>Know More</b>
          </Link>
           </span>
           </div>

       </div>
}
export default Top5Under60000;
