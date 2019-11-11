import React from 'react';
import Header from '../Common/Header/header';
import { Link } from 'react-router-dom'
import Realmex2pro from './Realmex2pro/realmex2pro';
import MobileUnder5000 from './mobileunder5000/mobileunder5000'
import MIUI11 from './MIUI11/miui11'
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import Slide from 'react-reveal/Slide';

const Phones = () => {
  return <div>
         <Header/>
         <div className='text-center container '>
         <h1 className='e4'><Texty>Mobiles</Texty></h1>
         <div className='row justify-content-center text-center'>

          <Slide bottom>
          <div className='col-md-4'>
          <MIUI11 />
          </div>
          </Slide>

          <Slide bottom>
          <div className='col-md-4'>
          <MobileUnder5000 />
          </div>
          </Slide>

          <Slide bottom>
          <div className='col-md-4'>
          <Realmex2pro />
          </div>
          </Slide>


           </div>
         </div>
         </div>

}

export default Phones;
