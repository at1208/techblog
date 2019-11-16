import React from 'react';
import Header from '../Common/Header/header';
import { Link } from 'react-router-dom'
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import Slide from 'react-reveal/Slide';


import Realmex2pro from './Realmex2pro/realmex2pro';
import MobileUnder5000 from './mobileunder5000/mobileunder5000'
import MIUI11 from './MIUI11/miui11';
import MINOTE10 from './MINote10/minote10';
import Realme5 from './Realme5/realme5'


import SmartphoneBanner1 from '../Ads/SmartphoneBanner1'
import Billiboard from '../Ads/Billiboard'
import HalfPageAd from '../Ads/HalfPageAd'
import Smartphonebanner2 from '../Ads/Smartphonebanner2'
import SuperLeaderboard from '../Ads/SuperLeaderboard';
import WideScraper from '../Ads/WideScraper'
import MediumRectangle from '../Ads/MediumRectangle'
 


const Phones = () => {
  return <div>
         <Header/>
         <div className='text-center container '>
         <h1 className='e4'><Texty>Mobiles</Texty></h1>
         <div className='row justify-content-center text-center'>

  <div className='row justify-content-center col-md-9 c28'>

          <Slide bottom>
          <div className=''>
          <Realme5 />
          </div>
          </Slide>

          <Slide bottom>
          <div className=''>
          <MINOTE10 />
          </div>
          </Slide>


          <Slide bottom>
          <div className=''>
          <MIUI11 />
          </div>
          </Slide>

          <Slide bottom>
          <div className=' '>
          <MobileUnder5000 />
          </div>
          </Slide>

          <Slide bottom>
          <div className=' '>
          <Realmex2pro />
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

export default Phones;
