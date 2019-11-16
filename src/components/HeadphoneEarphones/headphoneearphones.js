import React from 'react';
import Header from '../Common/Header/header';
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
import LeaderBoard from '../Ads/Leaderboard'


import Top5GamingHeadphone from './Top5GamingHeadphones/top5gamingheadphone'

const HeadphoneEarphones = () => {
  return <div>
  <Header/>
  <div className='container-fluid text-center'>
  <h1 className='e4'><Texty>Headphones & Earphones</Texty></h1>
  <div className='row justify-content-center text-center '>

  <div className=' col-md-2'>
   <MediumRectangle />
  </div>

  <div className='row justify-content-center col-md-7 c28'>

          <Slide bottom>
          <div className=''>
          <Top5GamingHeadphone />
          </div>
          </Slide>

  </div>
  <div className='row justify-content-center col-md-3 c27 '>
  <WideScraper />
  </div>

  </div>
    </div>
         </div>
}

export default HeadphoneEarphones;
