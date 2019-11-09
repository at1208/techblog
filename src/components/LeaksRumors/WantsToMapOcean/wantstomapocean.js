import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const WantsToMapOcean = () => {
  return <div>

<Link to='leaksrumors/Australian-based-start-up-wants-to-map-the-Oceans'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>WaterView</h6>
           <img src='../../blog5.jpg' className='card c16'/>
           <span className='c20'>
           Leaks & Rumors
           <br />
           <Link to='leaksrumors/Australian-based-start-up-wants-to-map-the-Oceans'>
          <b>Know More</b>
          </Link>
           </span>
           </div>
  </Link>

       </div>
}
export default WantsToMapOcean;
