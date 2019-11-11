import React from 'react';
import Header from '../../Common/Header/header';
import { Rate } from 'antd';
import { Link } from 'react-router-dom'

const RedgearPro = () => {
  return <div>
     <Link to='gaming-section/Redgear-Pro-Wireless-Gaming-Gamepad-“Best-Gaming-Controller-For-PC”'>
           <div className='c2 shadow card text-center container-fluid '>
               <h6 className='c17'>Redgear Pro Wireless Gaming Gamepad “Best Gaming Controller For PC”</h6>
               <img src='../../blog16.jpg' className='card c16'/>
                   <span className='c20 e3'>
                  Games Section
                   <br />
                   <Link to='gaming-section/Redgear-Pro-Wireless-Gaming-Gamepad-“Best-Gaming-Controller-For-PC”'>
                   <b className='e3'>Know More</b>
                   </Link>
                   </span>
           </div>
       </Link>
       </div>
}
export default RedgearPro;
