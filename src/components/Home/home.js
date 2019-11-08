import React, { Component } from 'react';
import Header from '../Common/Header/header';
import './home.css'
import { Carousel,Rate, Icon } from 'antd';
import { Link } from 'react-router-dom'



class Home extends Component{
   render(){
     return <div>
           <Header />

           <div className= 'c1'>
                  <Carousel autoplay className=''>

                  <div className='c3   container-fluid'>
                  <img src='https://static.emaxme.com/media/aw_rbslider/slides/Buy-Now_iPhone11_Pro_EMAX_MOB_APP-1920x850.jpg' className='card-img-top c8' alt='' />
                  </div>

                  <div className='c3  container-fluid '>
                    <img src='https://i01.appmifile.com/webfile/globalimg/Mandy/g7-Global-pc.jpg' className='card-img-top c8' alt='' />
                  </div>

                  <div className='c3  container-fluid '>
                    <img src='https://xiaomithanhhoa.vn/wp-content/uploads/2019/05/banner-web-04.png' className='card-img-top c8' alt='' />
                  </div>


                  <div className='c3  container-fluid '>
                    <img src='https://boygeniusreport.files.wordpress.com/2019/11/bgr-iphone-11-pro-1.jpg?quality=98&strip=all' className='card-img-top c8' alt='' />
                  </div>





                  </Carousel>


        <div className='container-fluid c4'>
                  <div className='row justify-content-center'>
                      <div className='row justify-content-center col-md-9'>

                       <div className='col-md-3 c2 shadow card text-center'>
                       <h6 className='c17'>Realme X2 Pro</h6>
                       <img src='blog1.png' className='card c16'/>
                       <span>

                       </span>
                       <Link to='/upcoming-phones/realme-x2-pro/realme-x2-pro-details'>
                       <b className='c19'>Know More</b>
                       </Link>
                       </div>


                       <div className='col-md-3 c2 shadow'>

                       </div>

                       <div className='col-md-3 c2 shadow'>

                       </div>

                       <div className='col-md-3 c2 shadow'>

                       </div>

                       <div className='col-md-3 c2 shadow'>

                       </div>

                       <div className='col-md-3 c2 shadow'>

                       </div>

                       <div className='col-md-3 c2 shadow'>

                       </div>

                       <div className='col-md-3 c2 shadow'>

                       </div>

                       <div className='col-md-3 c2 shadow'>

                       </div>
               </div>
               <div className='col-md-2 c5 shadow text-center'>
               <h1 className='c14'>Popular Posts</h1>
               <hr />
               </div>
           </div>
        </div>
        <footer className='shadow c6 text-center c10'>
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
