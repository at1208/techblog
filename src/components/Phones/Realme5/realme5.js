import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const Pubgmobile = () => {
  return <div>
    <Link to='/Phones/REALME-5S-is-launching-on-November-20-2019-along-with-X2-pro'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>REALME 5S is launching on November 20 2019 along with X2 pro!</h6>

           <img src='../../img/blog21.jpg' className='card c16'/>

           <span className='c20 e3'>
          Mobiles
           <br />
           <Link to='/Phones/REALME-5S-is-launching-on-November-20-2019-along-with-X2-pro'>
          <b className='  e3'>Know More</b>
          </Link>
           </span>
           </div>
</Link>
       </div>
}
export default Pubgmobile;
