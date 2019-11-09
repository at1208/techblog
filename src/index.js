import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/home'
import PhoneReviews from './components/PhoneReviews/phonereviews'
import UpcomingPhones from './components/UpcomingPhones/upcomingphones'
import NewLaunches from './components/NewLaunches/newlaunches'
import HeadphoneEarphones from './components/HeadphoneEarphones/headphoneearphones'
import LeakRumors from './components/LeaksRumors/leaksrumors'
import Laptops from './components/Laptops/laptops'
import GamesSection from './components/GamesSection/gamesection'
import BestBuyLink from './components/BestBuyLink/bestbuylink'
import Realmex2pro from './components/UpcomingPhones/Phones/Realmex2pro/realmex2pro'
import Realmex2proDetails from './components/UpcomingPhones/Phones/Realmex2pro/realmex2proDetail'
import { BrowserRouter, Route} from 'react-router-dom'
import Top5Under60000 from './components/Laptops/Laptop/top5under60000';
import Overwatch2 from './components/GamesSection/Overwatch2/overwatch2Detail';
import HarleyDavidsonBikes from './components/LeaksRumors/HarleyDavidsonBikes/harleydavidsonbikesDetail';

ReactDOM.render(
  <BrowserRouter>
   <Route path='/' exact component={Home} />
   <Route path='/phone-reviews' exact component={PhoneReviews} />
   <Route path='/new-launches' exact component={NewLaunches} />
   <Route path='/upcoming-phones' exact component={UpcomingPhones} />
   <Route path='/gaming-section' exact component={GamesSection} />
   <Route path='/headphone-earphones' exact component={HeadphoneEarphones} />
   <Route path='/laptops' exact component={Laptops} />
   <Route path='/leaks-rumors' exact component={LeakRumors} />
   <Route path='/best-buy-links' exact component={BestBuyLink} />
   <Route path='/upcoming-phones/realme-x2-pro' exact component={Realmex2pro} />
   <Route path='/upcoming-phones/realme-x2-pro/realme-x2-pro-details' exact component={Realmex2proDetails} />
   <Route path='/laptops/top-5-gaming-laptops-under-rs60000' exact component={Top5Under60000} />
   <Route path='/gaming-section/overwatch-2' exact component={Overwatch2} />
   <Route path='/leaksrumors/harley-davidson-electric-pedal-bikes' exact component={HarleyDavidsonBikes} />



  </BrowserRouter>
  ,document.getElementById('root'));
