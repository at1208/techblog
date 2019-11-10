import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const Halo = () => {
  return <div>
    <Link to='/laptops/7-ways-to-speed-up-your-laptops'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>7 Ways To speed up your laptop</h6>

           <img src='../../blog11.jpeg' className='card c16'/>

           <span className='c20'>
        Laptop
           <br />
           <Link to='/laptops/7-ways-to-speed-up-your-laptops'>
          <b>Know More</b>
          </Link>
           </span>
           </div>
</Link>
       </div>
}
export default Halo;
