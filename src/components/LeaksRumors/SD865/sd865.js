import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const SD865 = () => {
  return <div>
    <Link to='/Qualcomm-Snapdragon-865-specs-leaked'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>Qualcomm Snapdragon 865 specs leaked!!!</h6>

           <img src='../../img/blog18.jpg' className='card c16'/>

           <span className='c20 e3'>
          Leaks & Rumors
           <br />
           <Link to='/Qualcomm-Snapdragon-865-specs-leaked'>
          <b className='  e3'>Know More</b>
          </Link>
           </span>
           </div>
</Link>
       </div>
}
export default SD865;
