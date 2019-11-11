import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const Pubgmobile = () => {
  return <div>
    <Link to='/leaks-rumors/PUBG-Mobile-0.16.0-Update-could-bring-Erangle-2.0'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>PUBG Mobile 0.16.0 Update could bring Erangle 2.0</h6>

           <img src='../../blog13.jpg' className='card c16'/>

           <span className='c20 e3'>
          Leaks & Rumors
           <br />
           <Link to='/leaks-rumors/PUBG-Mobile-0.16.0-Update-could-bring-Erangle-2.0'>
          <b className='  e3'>Know More</b>
          </Link>
           </span>
           </div>
</Link>
       </div>
}
export default Pubgmobile;
