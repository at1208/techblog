import React from 'react';
import Header from '../Common/Header/header';
import { Link } from 'react-router-dom';
import Top5Under60000 from './Laptop/top5under60000'
import SpeedLaptop from './SpeedLaptop/speedlaptop';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import Slide from 'react-reveal/Slide';



const Laptops = () => {
  return <div>
            <Header/>
            <div className=' '>
            <h1 className='e4 text-center'><Texty>Laptops</Texty></h1>
                 <div className='container row justify-content-center'>

<Slide bottom>
                 <div className='col-md-4'>
                  <SpeedLaptop />
                 </div>
</Slide>

<Slide bottom>
                 <div className='col-md-4'>
                  <Top5Under60000 />
                 </div>
</Slide>




                 </div>
            </div>
         </div>
}

export default Laptops;
