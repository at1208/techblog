import React from 'react';
import ReactDOM from 'react-dom';

//Genre Section
import Home from './components/Home/home'
import Phones from './components/Phones/phones'
import HeadphoneEarphones from './components/HeadphoneEarphones/headphoneearphones'
import LeakRumors from './components/LeaksRumors/leaksrumors'
import Laptops from './components/Laptops/laptops'
import GamesSection from './components/GamesSection/gamesection'
import TrendingNews from './components/TrendingNews/trendingnews'


//Blogs
import Realmex2pro from './components/Phones/Realmex2pro/realmex2proDetail'
import { BrowserRouter, Route} from 'react-router-dom'
import Top5Under60000 from './components/Laptops/Laptop/top5under60000Detail';
import Overwatch2 from './components/GamesSection/Overwatch2/overwatch2Detail';
import HarleyDavidsonBikes from './components/LeaksRumors/HarleyDavidsonBikes/harleydavidsonbikesDetail';
import WantsToMapOcean from './components/LeaksRumors/WantsToMapOcean/wantstomapoceanDetail';
import Ayodhyaverdict from './components/TrendingNews/Ayodhyaverdict/ayodhyaverdictDetail'
import DeleteFacebook from './components/LeaksRumors/Deletingfb/deletingfbDetail';
import MobileUnder5000 from './components/Phones/mobileunder5000/mobileunder5000Detail';
import DeathStranding from './components/GamesSection/DeathStranding/deathstrandingDetail';
import Halo from './components/LeaksRumors/Halo/haloDetail';
import SpeedLaptopDetail from './components/Laptops/SpeedLaptop/speedlaptopDetail';
import MIUI11Detail from './components/Phones/MIUI11/miui11Detail';
import PubgmobileDetail from './components/LeaksRumors/PUBGMobile/pubgmobileDetail';
import GTA6 from './components/GamesSection/GTA6/gta6Detail';
import AppleCard from './components/LeaksRumors/AppleCreditCard/applecreditcardDetail';
import RedgearPro from './components/GamesSection/RedgearPro/redgearproDetail';





ReactDOM.render(
  <BrowserRouter>
   <Route path='/' exact component={Home} />
   <Route path='/phones' exact component={Phones} />
   <Route path='/gaming-section' exact component={GamesSection} />
   <Route path='/headphone-earphones' exact component={HeadphoneEarphones} />
   <Route path='/laptops' exact component={Laptops} />
   <Route path='/leaks-rumors' exact component={LeakRumors} />
   <Route path='/trendingnews' exact component={Laptops} />
   <Route path='/phones/realme-x2-pro' exact component={Realmex2pro} />
   <Route path='/laptops/top-5-gaming-laptops-under-rs60000' exact component={Top5Under60000} />
   <Route path='/gaming-section/overwatch-2' exact component={Overwatch2} />
   <Route path='/leaksrumors/harley-davidson-electric-pedal-bikes' exact component={HarleyDavidsonBikes} />
   <Route path='/leaksrumors/Australian-based-start-up-wants-to-map-the-Oceans' exact component={WantsToMapOcean} />
   <Route path='/leaksrumors/Brian-Acton-still-behind-the-idea-of-deleting-Facebook' exact component={DeleteFacebook} />
   <Route path='/phones/best-mobiles-under-5000' exact component={MobileUnder5000} />
   <Route path='/gaming-section/death-stranding' exact component={DeathStranding} />
   <Route path='/leaks-rumors/halo-tv-series-goes-into-production' exact component={Halo} />
   <Route path='/laptops/7-ways-to-speed-up-your-laptops' exact component={SpeedLaptopDetail} />
   <Route path='/phones/miui-11-life-gets-easier-Features-and-rollout-dates' exact component={MIUI11Detail} />
   <Route path='/leaks-rumors/PUBG-Mobile-0.16.0-Update-could-bring-Erangle-2.0' exact component={PubgmobileDetail} />
   <Route path='/gaming-section/GTA-6-LAUNCH-DATE' exact component={GTA6} />
   <Route path='/leaksrumors/Apple-credit-card-under-investigation-for-discrimination' exact component={AppleCard} />
   <Route path='/gaming-section/Redgear-Pro-Wireless-Gaming-Gamepad-“Best-Gaming-Controller-For-PC”' exact component={RedgearPro} />





  </BrowserRouter>
  ,document.getElementById('root'));
