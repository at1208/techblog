import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import { BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
   <Route path='/' exact component={App} />
   <Route path='/phone-reviews' component={App} />
   <Route path='/new-launches' component={App} />
   <Route path='/upcoming-phones' component={App} />
   <Route path='/gaming-section' component={App} />
   <Route path='/headphone-earphones' component={App} />
   <Route path='/laptops' component={App} />
   <Route path='/leaks-rumors' component={App} />
   <Route path='/fact-figure' component={App} />
   <Route path='/best-buy-links' component={App} />


  </BrowserRouter>
  ,document.getElementById('root'));
