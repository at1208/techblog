import React from 'react';
import Header from '../../Common/Header/header';
import { Rate } from 'antd';
import { Link } from 'react-router-dom'

const MobileUnder5000 = () => {
  return <div>
     <Link to='/phones/best-mobiles-under-5000'>
           <div className='c2 shadow card text-center container-fluid '>
               <h6 className='c17'>Best Mobile Phones Under Rs.5000</h6>
               <img src='../../blog8.png' className='card c16'/>
                   <span className='c20 e3'>
                  Mobiles
                   <br />
                   <Link to='/phones/best-mobiles-under-5000'>
                   <b className='e3'>Know More</b>
                   </Link>
                   </span>
           </div>
       </Link>
       </div>
}
export default MobileUnder5000;
