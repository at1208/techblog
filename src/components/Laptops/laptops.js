import React from 'react';
import Header from '../Common/Header/header';
import { Link } from 'react-router-dom';
import Top5Under60000 from './Laptop/top5under60000'
import SpeedLaptop from './SpeedLaptop/speedlaptop';
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


const Laptops = () => {
  return <div>
            <Header/>
            <div className='container'>
            <h1 className='e4 text-center'><Texty>Laptops</Texty></h1>
                 <div className='container row justify-content-center'>

                   <div className='row justify-content-center col-md-9 c28'>

                  <Slide bottom>
                    <div className=''>
                    <SpeedLaptop />
                    </div>
                  </Slide>

                  <Slide bottom>
                    <div className=''>
                    <Top5Under60000 />
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

export default Laptops;
