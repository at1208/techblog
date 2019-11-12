import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const Nightangle = () => {
  return <div>
  <Link to='/leaks-rumors/Google-announces-Project-Nightingale'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>Google announces ‘Project Nightingale’</h6>
           <img src='../../blog17.jpg' className='card c16'/>
           <span className='c20 e3'>
           Leaks & Rumors
           <br />
           <Link to='/leaks-rumors/Google-announces-Project-Nightingale'>
          <b className=' e3'>Know More</b>
          </Link>
           </span>
           </div>
    </Link>

       </div>
}
export default Nightangle;
