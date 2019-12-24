import React from 'react';
import Header from '../Common/Header/header'
import { Link } from 'react-router-dom'



import SmartphoneBanner1 from '../Ads/SmartphoneBanner1'
import Billiboard from '../Ads/Billiboard'
import HalfPageAd from '../Ads/HalfPageAd'
import Smartphonebanner2 from '../Ads/Smartphonebanner2'
import SuperLeaderboard from '../Ads/SuperLeaderboard';
import WideScraper from '../Ads/WideScraper'
import MediumRectangle from '../Ads/MediumRectangle'
import LeaderBoard from '../Ads/Leaderboard'




const PubgGliderDetail = () => {
   return <div>
         <Header/>


         <div className='row justify-content-center'>
         <div className='col-md-12 row justify-content-center container-fluid'>

        </div>
       <div className='col-md-12 row justify-content-center'>
       <div className='row justify-content-center col-md-2 c27'>

       </div>


         <div className='row justify-content-center col-md-7'>


         <div className='container c21'>
         <h5 className='e5 text-center'>PUBG To Test New Motor Glider This Weekend </h5>

         <div className='container-fluid row d1'>
          <img src='../../../img/Abhishek.jpg' alt=''  className='c22'/>
          <span className='c24 c23'>Abhishek Naagar <br /> <span  className='c25'>Sat, 21 Dec 2019</span>
          </span>
         </div>

         <img src='../../../img/blog25.jpg' className='e1'/>

  <p className='e3'>PUBG is getting its first ever player-controlled aircraft, Motor Glider in PUBG Labs​.​ The
Motor Glider is available in PUBG Labs from today at 12.30 PM until December 23 at
the same time. The aircraft will spawn randomly across maps such as Erangel and
Miramar.

  </p>
  <p className='e3'>The Motor Glider will accommodate two players and they can fire or use throwables like
molotovs against their enemies. Players will need to reach a maximum speed of 70
km/h to take off and they can use stick throttle to lock in forward acceleration. However,
the fuel consumption of Motor Glider is tied to the engine speed. So, a higher amount of
throttle will decrease the fuel level significantly. Players also have to note that the
engine will start losing power as the altitude increases

  </p>

  <p className='e3'>The Motor Glider's wings can take more damage compared to its engine. However, its
tires are indestructible. This will allow players to glide even after the engine is disabled
and land in a safe location.
PC players can test the Motor Glider for this weekend only.

</p>
   
</div>
  </div>

  <div className='col-md-2'>
  <div className='c30'>

  </div>
  </div>
 </div>
         </div>
           </div>
}

export default PubgGliderDetail;
