import React, { Component } from 'react';
import Header from '../Common/Header/header';
import './home.css'
import { Carousel,Rate, Icon } from 'antd';
import { Link } from 'react-router-dom'

import Realmex2pro from '../Phones/Realmex2pro/realmex2pro';
import WaterView from '../LeaksRumors/WantsToMapOcean/wantstomapocean';
import Top5GamingLapUnder60000 from '../Laptops/Laptop/top5under60000';
import HarleyDavidsonBikes from '../LeaksRumors/HarleyDavidsonBikes/harleydavidsonbike';
import Overwatch2 from '../GamesSection/Overwatch2/overwatch2';
import Ayodhyaverdict from '../TrendingNews/Ayodhyaverdict/ayodhyaverdict'


class Home extends Component{
   render(){
     return <div>
           <Header />

           <div className= 'c1'>
                  <Carousel autoplay className=''>

                  <div className='c3  container-fluid '>
                    <img src='https://boygeniusreport.files.wordpress.com/2019/11/bgr-iphone-11-pro-1.jpg?quality=98&strip=all' className='card-img-top c8' alt='' />
                  </div>

                  <div className='c3  container-fluid '>
                    <img src='https://i.gadgets360cdn.com/large/redmi_k20_pro_1560603064778.jpg' className='card-img-top c8' alt='' />
                  </div>

                  <div className='c3  container-fluid '>
                    <img src='https://cdn.wccftech.com/wp-content/uploads/2018/08/Nokia-9.jpg' className='card-img-top c8' alt='' />
                  </div>

                  <div className='c3  container-fluid '>
                    <img src='https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/11/04/Pictures/_d5b22ac4-ff02-11e9-96b3-72dd611148b5.jpg' className='card-img-top c8' alt='' />
                  </div>

                  </Carousel>


        <div className='container-fluid c4'>
                  <div className='row justify-content-center'>

                      <div className='row justify-content-center col-md-10'>

                       <WaterView />
                       <Realmex2pro />
                       <Top5GamingLapUnder60000 />
                       <HarleyDavidsonBikes />
                       <Overwatch2 />
                       <Ayodhyaverdict />


               </div>
               <div className='col-md-2 c5 shadow text-center'>
               <h1 className='c14'>Popular Posts</h1>
               <hr />
               </div>
           </div>
        </div>
        <footer className='shadow c6 c10 text-center container-fluid'>
        <h1 className='c13'>Connect with us</h1>
      <a href='https://www.instagram.com/geekboy.tech/'>
        <Icon type="instagram" className='c9' />
      </a>
      <a href='https://www.facebook.com/GeekBoytech-102592467865382/?modal=admin_todo_tour'>
        <Icon type="facebook" className='c11'/>
      </a>

      <a href='https://twitter.com/GeekboyT'>
        <Icon type="twitter" className='c12'/>
      </a>


        </footer>
        </div>


  </div>
   }
}
export default Home;
