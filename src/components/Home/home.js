import React, { Component } from 'react';
import Header from '../Common/Header/header';
import './home.css'
import { Carousel,Rate, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { InfiniteScroll } from 'react-simple-infinite-scroll'
import Slide from 'react-reveal/Slide';




import Realmex2pro from '../Phones/Realmex2pro/realmex2pro';
import WaterView from '../LeaksRumors/WantsToMapOcean/wantstomapocean';
import Top5GamingLapUnder60000 from '../Laptops/Laptop/top5under60000';
import HarleyDavidsonBikes from '../LeaksRumors/HarleyDavidsonBikes/harleydavidsonbike';
import Overwatch2 from '../GamesSection/Overwatch2/overwatch2';
import DeleteFacebook from '../LeaksRumors/Deletingfb/deletingfb'
import MobileUnder5000 from '../Phones/mobileunder5000/mobileunder5000';
import DeathStranding from '../GamesSection/DeathStranding/deathstranding';
import Halo from '../LeaksRumors/Halo/halo';
import SpeedLaptop from '../Laptops/SpeedLaptop/speedlaptop';
import MIUI11 from '../Phones/MIUI11/miui11';
import { Parallax } from 'rc-scroll-anim';




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

                      <div className='row justify-content-center col-md-12'>
                          <Slide bottom>
                          <MIUI11 />
                          </Slide>

                          <Slide bottom>
                          <SpeedLaptop />
                          </Slide>

                          <Slide bottom>
                          <Halo />
                          </Slide>

                          <Slide bottom>
                          <DeathStranding />
                          </Slide>

                          <Slide bottom>
                          <DeleteFacebook />
                          </Slide>

                          <Slide bottom>
                          <MobileUnder5000 />
                          </Slide>

                          <Slide bottom>
                          <WaterView />
                          </Slide>

                          <Slide bottom>
                          <Realmex2pro />
                          </Slide>

                          <Slide bottom>
                          <Top5GamingLapUnder60000 />
                          </Slide>

                          <Slide bottom>
                          <HarleyDavidsonBikes />
                          </Slide>

                          <Slide bottom>
                          <Overwatch2 />
                          </Slide>




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
