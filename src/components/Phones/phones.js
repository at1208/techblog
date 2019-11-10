import React from 'react';
import Header from '../Common/Header/header';
import { Link } from 'react-router-dom'
import Realmex2pro from './Realmex2pro/realmex2pro';
import MobileUnder5000 from './mobileunder5000/mobileunder5000'
import MIUI11 from './MIUI11/miui11'

const Phones = () => {
  return <div>
         <Header/>
         <div className='text-center container '>
         <h1 className='e4'>Mobiles</h1>
         <div className='row justify-content-center text-center'>

               <div className='col-md-4'>
               <MIUI11 />
               </div>

               <div className='col-md-4'>
               <MobileUnder5000 />
               </div>

              <div className='col-md-4'>
              <Realmex2pro />
              </div>



           </div>
         </div>
         </div>

}

export default Phones;
