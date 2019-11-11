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
import PUBGMobile from './PUBGMobile/pubgmobile'

const LeakRumors = () => {
  return <div>
            <Header/>
            <div className=''>
            <h1 className='e4 text-center'><Texty>Leaks & Rumors</Texty></h1>
                 <div className='container-fluid row justify-content-center'>


 <Slide bottom>
                  <div className='col-md-3'>
                   <PUBGMobile />
                  </div>
 </Slide>

<Slide bottom>
                 <div className='col-md-3'>
                  <Halo />
                 </div>
</Slide>

<Slide bottom>
                 <div className='col-md-3'>
                  <Deletingfb />
                 </div>
</Slide>

<Slide bottom>
                  <div className='col-md-3 ' >
                  <HarleyDavidsonBikes />
                 </div>
</Slide>


<Slide bottom>
                 <div className='col-md-3'>
                  <WantsToMapOcean />
                 </div>
</Slide>

                 </div>
            </div>
         </div>
}

export default LeakRumors;
