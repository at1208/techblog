import React from 'react';
import Header from '../Common/Header/header';
import Overwatch2 from './Overwatch2/overwatch2';
import DeathStranding from './DeathStranding/deathstranding';
import GTA6 from './GTA6/gta6'
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import Slide from 'react-reveal/Slide';


const GamesSection = () => {
  return <div>
         <Header/>
  <div className='text-center'>
  <h1 className='e4'><Texty>Games Section</Texty></h1>
  <div className='container row justify-content-center'>

<Slide bottom>
  <div className='col-md-4'>
  <GTA6 />
  </div>
</Slide>


<Slide bottom>
  <div className='col-md-4'>
  <DeathStranding />
  </div>
</Slide>


<Slide bottom>
  <div className='col-md-4'>
  <Overwatch2 />
  </div>
</Slide>


  </div>
    </div>
         </div>
}

export default GamesSection;
