import React, { Component } from 'react';
import Header from '../Common/Header/header';
import './home.css'
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import { useMediaQuery } from 'react-responsive';


import SmartphoneBanner1 from '../Ads/SmartphoneBanner1'
import Billiboard from '../Ads/Billiboard'
import HalfPageAd from '../Ads/HalfPageAd'
import Smartphonebanner2 from '../Ads/Smartphonebanner2'
import SuperLeaderboard from '../Ads/SuperLeaderboard';
import WideScraper from '../Ads/WideScraper'
import MediumRectangle from '../Ads/MediumRectangle'
import LeaderBoard from '../Ads/Leaderboard'



import Realmex2pro from '../Phones/Realmex2pro/realmex2pro';
import WaterView from '../LeaksRumors/WantsToMapOcean/wantstomapocean';
import Top5GamingLapUnder60000 from '../Laptops/Laptop/top5under60000';
import HarleyDavidsonBikes from '../LeaksRumors/HarleyDavidsonBikes/harleydavidsonbike';
import Overwatch2 from '../GamesSection/Overwatch2/overwatch2';
import DeleteFacebook from '../LeaksRumors/Deletingfb/deletingfb'
import MobileUnder5000 from '../Phones/mobileunder5000/mobileunder5000';
import DeathStranding from '../GamesSection/DeathStranding/deathstranding';
import Halo from '../LeaksRumors/Halo/halo';
import SpeedLaptop from '../Laptops/SpeedLaptop/speedlaptop';
import MIUI11 from '../Phones/MIUI11/miui11';
import Pubgmobile from '../LeaksRumors/PUBGMobile/pubgmobile'
import GTA6 from '../GamesSection/GTA6/gta6'
import AppleCard from '../LeaksRumors/AppleCreditCard/applecreditcard';
import RedgearPro from '../GamesSection/RedgearPro/redgearpro';
import Nightangle from '../LeaksRumors/Nightangle/nightangle';
import SD865 from '../LeaksRumors/SD865/sd865';
import MINOTE10 from '../Phones/MINote10/minote10';
import Top5GamingHeadphone from '../HeadphoneEarphones/Top5GamingHeadphones/top5gamingheadphone';
import Realme5 from '../Phones/Realme5/realme5'







class Home extends Component{



   render(){


     return <div>

           <Header />

           <div className= 'c1'>



        <div className='container-fluid c4 text-center'>
                  <div className='row justify-content-center'>

         <div className='col-md-12 row justify-content-center container-fluid'>
      <LeaderBoard />
        </div>


<div className='col-md-12 row justify-content-center'>
                  <div className='row justify-content-center col-md-2 c27'>
                <MediumRectangle />
                  </div>

                      <div className='row justify-content-center col-md-7 c28'>



                          <Slide bottom>
                          <Realme5 />
                          </Slide>


                          <Slide bottom>
                          <Top5GamingHeadphone />
                          </Slide>


                          <Slide bottom>
                          <MINOTE10 />
                          </Slide>


                          <Slide bottom>
                          <SD865 />
                          </Slide>


                          <Slide bottom>
                          <Nightangle />
                          </Slide>

                          <Slide bottom>
                          <RedgearPro />
                          </Slide>


                          <Slide bottom>
                          <AppleCard />
                          </Slide>

                          <Slide bottom>
                          <GTA6 />
                          </Slide>


                          <Slide bottom>
                          <Pubgmobile />
                          </Slide>

                          <Slide bottom>
                          <MIUI11 />
                          </Slide>

                          <Slide bottom>
                          <SpeedLaptop />
                          </Slide>

                          <Slide bottom>
                          <Halo />
                          </Slide>

                          <Slide bottom>
                          <DeathStranding />
                          </Slide>

                          <Slide bottom>
                          <DeleteFacebook />
                          </Slide>

                          <Slide bottom>
                          <MobileUnder5000 />
                          </Slide>

                          <Slide bottom>
                          <WaterView />
                          </Slide>

                          <Slide bottom>
                          <Realmex2pro />
                          </Slide>

                          <Slide bottom>
                          <Top5GamingLapUnder60000 />
                          </Slide>

                          <Slide bottom>
                          <HarleyDavidsonBikes />
                          </Slide>

                          <Slide bottom>
                          <Overwatch2 />
                          </Slide>



               </div>
               <div className='row justify-content-center col-md-3 c27'>
               <WideScraper />
               </div>
  </div>

           </div>
        </div>
        <footer className='shadow c6 c10 text-center container-fluid'>
        <h1 className='c13'>Connect with us</h1>
      <a href='https://www.instagram.com/geekboy.tech/'>
        <Icon type="instagram" className='c9' />
      </a>
      <a href='https://www.facebook.com/GeekBoytech-102592467865382/?modal=admin_todo_tour'>
        <Icon type="facebook" className='c11'/>
      </a>

      <a href='https://twitter.com/GeekboyT'>
        <Icon type="twitter" className='c12'/>
      </a>


        </footer>
        </div>


  </div>
   }
}
export default Home;
