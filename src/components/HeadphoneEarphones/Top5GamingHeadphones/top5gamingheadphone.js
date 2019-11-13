import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const DeathStranding = () => {
  return <div>
    <Link to='/HeadphoneEarphones/TOP-5-GAMING-HEADPHONES'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>TOP 5 GAMING HEADPHONES</h6>

           <img src='../../img/blog20two.png' className='card c16'/>

           <span className='c20 e3'>
          Headphones
           <br />
           <Link to='/HeadphoneEarphones/TOP-5-GAMING-HEADPHONES'>
          <b className='e3'>Know More</b>
          </Link>
           </span>
           </div>
</Link>
       </div>
}
export default DeathStranding;
