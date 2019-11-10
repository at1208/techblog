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
import MobileUnder5000 from './components/Phones/mobileunder5000/mobileunder5000Detail'



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



  </BrowserRouter>
  ,document.getElementById('root'));
