import React from 'react';
import Header from '../Common/Header/header';
import Overwatch2 from './Overwatch2/overwatch2'

const GamesSection = () => {
  return <div>
         <Header/>
  <div className='container text-center'>
  <h1 className='e4'>Games Section</h1>
  <Overwatch2 />
  </div>
         </div>
}

export default GamesSection;
