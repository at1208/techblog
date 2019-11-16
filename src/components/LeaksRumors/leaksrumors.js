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



import SmartphoneBanner1 from '../Ads/SmartphoneBanner1'
import Billiboard from '../Ads/Billiboard'
import HalfPageAd from '../Ads/HalfPageAd'
import Smartphonebanner2 from '../Ads/Smartphonebanner2'
import SuperLeaderboard from '../Ads/SuperLeaderboard';
import WideScraper from '../Ads/WideScraper'
import MediumRectangle from '../Ads/MediumRectangle';
 



import PUBGMobile from './PUBGMobile/pubgmobile';
import AppleCard from './AppleCreditCard/applecreditcard'
import Nightangle from './Nightangle/nightangle';
import SD865 from './SD865/sd865'


const LeakRumors = () => {
  return <div>
            <Header/>
            <div className='text-center container '>
            <h1 className='e4'><Texty>Leaks & Rumors</Texty></h1>
                 <div className='row justify-content-center text-center'>

  <div className='row justify-content-center col-md-9 c28'>

                <Slide bottom>
                <div className=''>
                <SD865 />
                </div>
                </Slide>


                <Slide bottom>
                <div className=''>
                <Nightangle />
                </div>
                </Slide>

                 <Slide bottom>
                 <div className=''>
                 <AppleCard />
                 </div>
                 </Slide>

                  <Slide bottom>
                  <div className=''>
                  <PUBGMobile />
                  </div>
                  </Slide>

                  <Slide bottom>
                  <div className=''>
                  <Halo />
                  </div>
                  </Slide>

                  <Slide bottom>
                  <div className=''>
                  <Deletingfb />
                  </div>
                  </Slide>

                  <Slide bottom>
                  <div className=' ' >
                  <HarleyDavidsonBikes />
                  </div>
                  </Slide>


                  <Slide bottom>
                  <div className=''>
                  <WantsToMapOcean />
                  </div>
                  </Slide>

                  </div>
                  <div className='row justify-content-center col-md-3 c27 '>
                  <WideScraper />
                  <HalfPageAd />
                  <Smartphonebanner2 />
                  </div>

                 </div>
            </div>
         </div>
}

export default LeakRumors;
