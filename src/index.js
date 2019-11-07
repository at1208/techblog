import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/home'
import PhoneReviews from './components/PhoneReviews/phonereviews'
import UpcomingPhones from './components/UpcomingPhones/upcomingphones'
import NewLaunches from './components/NewLaunches/newlaunches'
import HeadphoneEarphones from './components/HeadphoneEarphones/headphoneearphones'
import LeakRumors from './components/LeaksRumors/leaksrumors'
import Laptops from './components/Laptops/laptops'
import FactFigure from './components/FactFigure/factfigure'
import GamesSection from './components/GamesSection/gamesection'
import BestBuyLink from './components/BestBuyLink/bestbuylink'
import { BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
   <Route path='/' exact component={Home} />
   <Route path='/phone-reviews' component={PhoneReviews} />
   <Route path='/new-launches' component={NewLaunches} />
   <Route path='/upcoming-phones' component={UpcomingPhones} />
   <Route path='/gaming-section' component={GamesSection} />
   <Route path='/headphone-earphones' component={HeadphoneEarphones} />
   <Route path='/laptops' component={Laptops} />
   <Route path='/leaks-rumors' component={LeakRumors} />
   <Route path='/facts-figures' component={FactFigure} />
   <Route path='/best-buy-links' component={BestBuyLink} />


  </BrowserRouter>
  ,document.getElementById('root'));
