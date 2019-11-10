import React from 'react';
import Header from '../../Common/Header/header';
import { Rate } from 'antd';
import { Link } from 'react-router-dom'

const Realmex2pro = () => {
  return <div>
     <Link to='/phones/realme-x2-pro'>
           <div className='c2 shadow card text-center container-fluid '>
               <h6 className='c17'>Realme X2 Pro</h6>
               <img src='../../blog1.png' className='card c16'/>
                   <span className='c20 e3'>
                   Upcoming Phone
                   <br />
                   <Link to='/phones/realme-x2-pro'>
                   <b className='e3'>Know More</b>
                   </Link>
                   </span>
           </div>
       </Link>
       </div>
}
export default Realmex2pro;
