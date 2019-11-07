import React from 'react';
import './header.css'
import Drawer from '../Drawer/drawer';
import { Link } from 'react-router-dom'
 


const Header = () => {
  return <div className='container-fluid a1 '>
                     <div className='row'>
                      <Drawer/>

                      <Link to='/'>
                       <div className='a2 '>
                      <h1 className='a3'>GeekBoy.<span className='a4'>tech</span></h1>
                       </div>
                       </Link>

               </div>




         </div>

}
export default Header;
