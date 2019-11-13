import React from 'react';
import Header from '../../Common/Header/header';
import { Rate } from 'antd';
import { Link } from 'react-router-dom'

const MINOTE10 = () => {
  return <div>
     <Link to='/Phones/MI-Note-10-Dream-Big'>
           <div className='c2 shadow card text-center container-fluid '>
               <h6 className='c17'>MI Note 10 “ Dream Big “</h6>
               <img src='../../img/blog19.png' className='card c16'/>
                   <span className='c20 e3'>
                   Mobiles
                   <br />
                   <Link to='/Phones/MI-Note-10-Dream-Big'>
                   <b className='e3'>Know More</b>
                   </Link>
                   </span>
           </div>
       </Link>
       </div>
}
export default MINOTE10;
