import React from 'react';
import Header from '../Common/Header/header';
import { Link } from 'react-router-dom';
import Top5Under60000 from './Laptop/top5under60000'
import SpeedLaptop from './SpeedLaptop/speedlaptop'



const Laptops = () => {
  return <div>
            <Header/>
            <div className='container'>
            <h1 className='e4 text-center'>Laptops</h1>
                 <div className='container row justify-content-center'>

                 <div className='col-md-4'>
                  <SpeedLaptop />
                 </div>

                 <div className='col-md-4'>
                  <Top5Under60000 />
                 </div>




                 </div>
            </div>
         </div>
}

export default Laptops;
