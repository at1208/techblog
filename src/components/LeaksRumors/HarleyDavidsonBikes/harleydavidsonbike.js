import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const HarleyDavidsonBikes = () => {
  return <div>
  <Link to='/leaksrumors/harley-davidson-electric-pedal-bikes'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>Harley-Davidson’s Electric Pedal Bikes</h6>
           <img src='../../img/blog4.jpg' className='card c16'/>
           <span className='c20 e3'>
           Leaks & Rumors
           <br />
           <Link to='/leaksrumors/harley-davidson-electric-pedal-bikes'>
          <b className=' e3'>Know More</b>
          </Link>
           </span>
           </div>
    </Link>

       </div>
}
export default HarleyDavidsonBikes;
