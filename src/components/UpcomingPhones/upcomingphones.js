import React from 'react';
import Header from '../Common/Header/header';
import Realmex2pro from './Phones/Realmex2pro/realmex2pro'
import './upcomingphones.css'

const UpcomingReviews = () => {
  return <div>
       <Header/>
       <div className='container text-center'>
       <h1 className='d1'>Upcoming Phones</h1>
       <Realmex2pro />
       </div>
         </div>
}

export default UpcomingReviews;
