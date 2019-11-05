import React, { Component } from 'react';
import Header from '../Header/header';
import './home.css'
import { Carousel,Rate } from 'antd';



class Home extends Component{
   render(){
     return <div>
           <Header />

           <div className= 'c1'>
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
               <div className='col-md-2 c5 shadow'>
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
