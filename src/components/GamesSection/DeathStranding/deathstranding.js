import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const DeathStranding = () => {
  return <div>
    <Link to='gaming-section/death-stranding'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>Death Stranding</h6>

           <img src='../../blog9.png' className='card c16'/>

           <span className='c20'>
          Gaming Section
           <br />
           <Link to='gaming-section/death-stranding'>
          <b>Know More</b>
          </Link>
           </span>
           </div>
</Link>
       </div>
}
export default DeathStranding;
