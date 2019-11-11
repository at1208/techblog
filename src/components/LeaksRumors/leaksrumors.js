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
import PUBGMobile from './PUBGMobile/pubgmobile';
import AppleCard from './AppleCreditCard/applecreditcard'

const LeakRumors = () => {
  return <div>
            <Header/>
            <div className='text-center container '>
            <h1 className='e4'><Texty>Leaks & Rumors</Texty></h1>
                 <div className='row justify-content-center text-center'>


                 <Slide bottom>
                 <div className='col-md-4'>
                 <AppleCard />
                 </div>
                 </Slide>

                  <Slide bottom>
                  <div className='col-md-4'>
                  <PUBGMobile />
                  </div>
                  </Slide>

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
