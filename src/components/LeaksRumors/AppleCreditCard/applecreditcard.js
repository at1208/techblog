import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const AppleCard = () => {
  return <div>
    <Link to='/leaksrumors/Apple-credit-card-under-investigation-for-discrimination'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>Apple’s credit card under investigation for discrimination</h6>

           <img src='../../img/blog15.jpg' className='card c16'/>

           <span className='c20 e3'>
        Leaks & Rumors
           <br />
           <Link to='/leaksrumors/Apple-credit-card-under-investigation-for-discrimination'>
          <b className='e3'>Know More</b>
          </Link>
           </span>
           </div>
</Link>
       </div>
}
export default AppleCard;
