import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const DeathStranding = () => {
  return <div>
    <Link to='/gaming-section/GTA-6-LAUNCH-DATE'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>GTA 6 LAUNCH DATE</h6>

           <img src='../../img/blog14.png' className='card c16'/>

           <span className='c20 e3'>
          Gaming Section
           <br />
           <Link to='/gaming-section/GTA-6-LAUNCH-DATE'>
          <b className='e3'>Know More</b>
          </Link>
           </span>
           </div>
</Link>
       </div>
}
export default DeathStranding;
