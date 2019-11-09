import React from 'react';
import Header from '../Common/Header/header';
import { Link } from 'react-router-dom'
import Realmex2pro from './Realmex2pro/realmex2pro'

const Phones = () => {
  return <div>
         <Header/>
         <div className='container text-center'>
         <h1 className='e4'>Phone</h1>
         <Realmex2pro />
         </div>
         </div>
}

export default Phones;
