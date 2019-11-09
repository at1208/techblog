import React from 'react';
import Header from '../../Common/Header/header';
import { Rate } from 'antd';
import { Link } from 'react-router-dom'

const HarleyDavidsonBikes = () => {
  return <div>

          <div className=''>
              <div className='col-md-12'>

           <div className='col-md-3 c2 shadow card text-center container-fluid'>
           <h6 className='c17'>Harley-Davidson’s Electric Pedal Bikes</h6>
           <img src='../../blog4.jpg' className='card c16'/>
           <span className='c20'>
           Leaks & Rumors
           <br />
           <Link to='/leaksrumors/harley-davidson-electric-pedal-bikes'>
          <b>Know More</b>
          </Link>
           </span>
           </div>
          </div>
          </div>
       </div>
}
export default HarleyDavidsonBikes;
