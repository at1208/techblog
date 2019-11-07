import React, { Component } from 'react';
import Header from '../Header/header';
import './home.css'
import { Carousel,Rate, Icon } from 'antd';



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
                       <div className='col-md-3 c2 shadow'>
                       <Rate allowHalf defaultValue={2.5} />
                       </div>

                       <div className='col-md-3 c2 shadow'>
                       <Rate allowHalf defaultValue={3.5} />
                       </div>

                       <div className='col-md-3 c2 shadow'>
                       <Rate allowHalf defaultValue={3} />
                       </div>

                       <div className='col-md-3 c2 shadow'>
                       <Rate allowHalf defaultValue={4.5} />
                       </div>

                       <div className='col-md-3 c2 shadow'>
                       <Rate allowHalf defaultValue={4} />
                       </div>

                       <div className='col-md-3 c2 shadow'>
                       <Rate allowHalf defaultValue={2} />
                       </div>

                       <div className='col-md-3 c2 shadow'>
                       <Rate allowHalf defaultValue={1} />
                       </div>

                       <div className='col-md-3 c2 shadow'>
                       <Rate allowHalf defaultValue={2.5} />
                       </div>

                       <div className='col-md-3 c2 shadow'>
                       <Rate allowHalf defaultValue={2.5} />
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

        <Icon type="instagram" className='c9' />
        <Icon type="facebook" className='c11'/>
        <Icon type="twitter" className='c12'/>

   
        </footer>
        </div>


  </div>
   }
}
export default Home;
