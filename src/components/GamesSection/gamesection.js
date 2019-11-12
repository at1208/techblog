import React from 'react';
import Header from '../Common/Header/header';
import Overwatch2 from './Overwatch2/overwatch2';
import DeathStranding from './DeathStranding/deathstranding';
import RedgearPro from './RedgearPro/redgearpro'
import GTA6 from './GTA6/gta6'
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import Slide from 'react-reveal/Slide';

import SmartphoneBanner1 from '../Ads/SmartphoneBanner1'
import Billiboard from '../Ads/Billiboard'
import HalfPageAd from '../Ads/HalfPageAd'
import Smartphonebanner2 from '../Ads/Smartphonebanner2'
import SuperLeaderboard from '../Ads/SuperLeaderboard';
import WideScraper from '../Ads/WideScraper'
import MediumRectangle from '../Ads/MediumRectangle'



const GamesSection = () => {
  return <div>
         <Header/>

  <div className='text-center container'>
  <h1 className='e4'><Texty>Games Section</Texty></h1>
  <div className='row justify-content-center text-center '>


  <div className='row justify-content-center col-md-9 c28'>
          <Slide bottom>
          <div className=''>
          <RedgearPro />
          </div>
          </Slide>


          <Slide bottom>
          <div className=' '>
          <GTA6 />
          </div>
          </Slide>


          <Slide bottom>
          <div className=' '>
          <DeathStranding />
          </div>
          </Slide>


          <Slide bottom>
          <div className=' '>
          <Overwatch2 />
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

export default GamesSection;
