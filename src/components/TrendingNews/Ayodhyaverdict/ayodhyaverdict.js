import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const Ayodhyaverdict = () => {
  return <div>


           <div className='shadow card text-center container-fluid f2'>
           <h6 className='c17'>Ayodhya Verdict</h6>
           <img src='../../blog.jpg' className='card c16'/>
           <span className='c20'>
           Trending News
           <br />
           <Link to='leaksrumors/Australian-based-start-up-wants-to-map-the-Oceans'>
          <b>Know More</b>
          </Link>
           </span>
           </div>

       </div>
}
export default Ayodhyaverdict;
