import React, { Component } from 'react';
import Header from '../Header/header';
import './home.css'
import { Carousel } from 'antd';



class Home extends Component{
   render(){
     return <div>
           <Header />

           <div className= 'c1 '>
                  <Carousel autoplay className=''>
                  <div className='c3  shadow container'>
                  </div>

                  <div className='c3 shadow container'>
                  </div>

                  <div className='c3 shadow container'>
                  </div>

                  <div className='c3 shadow container'>
                  </div>
                  </Carousel>


        <div className='container c4'>
                  <div className='row justify-content-center'>
                      <div className='row justify-content-center col-lg-9'>
                       <div className='col-lg-3 c2 shadow'>
                       </div>

                       <div className='col-lg-3 c2 shadow'>
                       </div>

                       <div className='col-lg-3 c2 shadow'>
                       </div>

                       <div className='col-lg-3 c2 shadow'>
                       </div>

                       <div className='col-lg-3 c2 shadow'>
                       </div>

                       <div className='col-lg-3 c2 shadow'>
                       </div>

                       <div className='col-lg-3 c2 shadow'>
                       </div>

                       <div className='col-lg-3 c2 shadow'>
                       </div>

                       <div className='col-lg-3 c2 shadow'>
                       </div>
               </div>
               <div className='col-lg-3 c5 shadow'>
               </div>
           </div>
        </div>
        <footer className='shadow c6'>
        </footer>
        </div>


  </div>
   }
}
export default Home;
