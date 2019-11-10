import React from 'react';
import Header from '../Common/Header/header';
import Overwatch2 from './Overwatch2/overwatch2';
import DeathStranding from './DeathStranding/deathstranding';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

const GamesSection = () => {
  return <div>
         <Header/>
  <div className='text-center'>
  <h1 className='e4'><Texty>Games Section</Texty></h1>
  <div className='container row justify-content-center'>

  <div className='col-md-4'>
  <DeathStranding />
      </div>


  <div className='col-md-4'>
  <Overwatch2 />
    </div>


  </div>
    </div>
         </div>
}

export default GamesSection;
