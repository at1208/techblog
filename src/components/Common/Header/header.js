import React from 'react';
import './header.css'
import Drawer from '../Drawer/drawer';
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import { Icon } from 'antd';





const Header = () => {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

if(isTabletOrMobile){
  return <div className='container-fluid a1 '>
                     <div className='row'>
                      <Drawer/>
                       <div className='a2 '>
                           <Link to='/'>
                      <h1 className='a3'>GeekBoy.<span className='a4'>tech</span></h1>
                      </Link>
                       </div>
                </div>
         </div>

}
else if(isDesktopOrLaptop){
  return <div className='container-fluid a1 '>
                     <div className='row'>
                       <div className='a2 '>
                           <Link to='/'>
                      <h1 className='a3'>GeekBoy.<span className='a4'>tech</span></h1>
                      </Link>

                      <div className='text-center container-fluid'>
                      <div className='row justify-content-center'>

                              <Link to='/phones' className=''>
                              <button className=' btn btn-block   shadow a5'><Icon type="mobile" className='float-left b4'/>Phones</button>
                              </Link>

                              <Link to='/gaming-section' className=''>
                              <button className=' btn btn-block   shadow a5'><Icon type="robot" className='float-left b7'/>Gaming Section</button>
                              </Link>

                              <Link to='/headphone-earphones' className=''>
                              <button className=' btn btn-block   shadow a5'><Icon type="customer-service" className='float-left b8'/>Headphones</button>
                              </Link>

                              <Link to='/laptops' className=''>
                              <button className=' btn btn-block   shadow a5'><Icon type="laptop" className='float-left b9'/>Laptops</button>
                              </Link>

                              <Link to='/leaks-rumors' className=''>
                              <button className=' btn btn-block   shadow a5'><Icon type="fire" className='float-left b10'/>Leaks & Rumors</button>
                              </Link>


                     </div>
                      </div>

                       </div>
               </div>
         </div>

}

}
export default Header;
