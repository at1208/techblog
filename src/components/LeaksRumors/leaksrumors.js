import React from 'react';
import Header from '../Common/Header/header';
import HarleyDavidsonBikes from './HarleyDavidsonBikes/harleydavidsonbike'
import WantsToMapOcean from './WantsToMapOcean/wantstomapocean'
import Deletingfb from './Deletingfb/deletingfb'
import Halo from './Halo/halo'
import './leaksrumors.css'

const LeakRumors = () => {
  return <div>
            <Header/>
            <div className='container'>
            <h1 className='e4 text-center'>Leaks & Rumors</h1>
                 <div className='container row justify-content-center'>

                 <div className='col-md-4'>
                  <Halo />
                 </div>

                 <div className='col-md-4'>
                  <Deletingfb />
                 </div>

                  <div className='col-md-4 ' >
                  <HarleyDavidsonBikes />
                 </div>

                 <div className='col-md-4'>
                  <WantsToMapOcean />
                 </div>


                 </div>
            </div>
         </div>
}

export default LeakRumors;
