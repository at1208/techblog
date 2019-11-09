import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const Ayodhyaverdict = () => {
  return <div>
  <Link to='/trendingnews/ayodhya-verdict'>
             <div className='c2 shadow card container text-center'>
             <h6 className='c17'>Ayodhya Verdict</h6>
             <img src='../../blog6.jpg' className='card c16'/>
             <span className='c20'>
           Trending News
             <br />
             <Link to='/trendingnews/ayodhya-verdict'>
            <b>Know More</b>
            </Link>
             </span>
             </div>
  </Link>
       </div>
}
export default Ayodhyaverdict;
