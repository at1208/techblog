import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const Halo = () => {
  return <div>
    <Link to='/leaks-rumors/halo-tv-series-goes-into-production'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>‘Halo’ TV Series goes into production</h6>

           <img src='../../blog10.jpg' className='card c16'/>

           <span className='c20 e3'>
          Leaks & Rumors
           <br />
           <Link to='/leaks-rumors/halo-tv-series-goes-into-production'>
          <b className='  e3'>Know More</b>
          </Link>
           </span>
           </div>
</Link>
       </div>
}
export default Halo;
