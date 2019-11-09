import React from 'react';
import Header from '../Common/Header/header';
import HarleyDavidsonBikes from './HarleyDavidsonBikes/harleydavidsonbike'

const LeakRumors = () => {
  return <div>
  <Header/>
  <div className='container text-center'>
  <h1 className='e4'>Leaks & Rumors</h1>
  <HarleyDavidsonBikes />
  </div>
         </div>
}

export default LeakRumors;
