import React from 'react';
import Header from '../Common/Header/header';
import { Link } from 'react-router-dom'


const Laptops = () => {
  return <div>
  <Header/>
  <div className='container text-center'>
  <h1 className='e4'>Laptops</h1>

  <div className=''>
      <div className='col-md-12'>

   <div className='col-md-3 c2 shadow card text-center container-fluid'>
   <h6 className='c17'>Top 5 Gaming Laptops under INR60000</h6>
   <img src='../blog2six.JPG' className='card c16'/>
   <span className='c20'>

   <br />
   <Link to='/laptops/top-5-gaming-laptops-under-rs60000'>
  <b>Know More</b>
  </Link>
   </span>
   </div>
  </div>
  </div>

  </div>
         </div>
}

export default Laptops;
