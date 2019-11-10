import React from 'react';
import Header from '../Common/Header/header';
import HarleyDavidsonBikes from './HarleyDavidsonBikes/harleydavidsonbike'
import WantsToMapOcean from './WantsToMapOcean/wantstomapocean'
import Deletingfb from './Deletingfb/deletingfb'
import Halo from './Halo/halo'
import './leaksrumors.css'
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import Slide from 'react-reveal/Slide';

const LeakRumors = () => {
  return <div>
            <Header/>
            <div className=''>
            <h1 className='e4 text-center'><Texty>Leaks & Rumors</Texty></h1>
                 <div className='container row justify-content-center'>

<Slide bottom>
                 <div className='col-md-4'>
                  <Halo />
                 </div>
</Slide>

<Slide bottom>
                 <div className='col-md-4'>
                  <Deletingfb />
                 </div>
</Slide>

<Slide bottom>
                  <div className='col-md-4 ' >
                  <HarleyDavidsonBikes />
                 </div>
</Slide>


<Slide bottom>
                 <div className='col-md-4'>
                  <WantsToMapOcean />
                 </div>
</Slide>

                 </div>
            </div>
         </div>
}

export default LeakRumors;
