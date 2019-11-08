import React from 'react';
import Header from '../../../Common/Header/header';
import { Rate } from 'antd';
import { Link } from 'react-router-dom'

const Phone = () => {
  return <div>

          <div className='row justify-content-center'>
              <div className='  col-md-12'>

           <div className='col-md-3 c2 shadow card text-center container-fluid'>
           <h6 className='c17'>Realme X2 Pro</h6>
           <img src='../../blog1.png' className='card c16'/>
           <span>

           <br />
           <Link to='/upcoming-phones/realme-x2-pro/realme-x2-pro-details'>
          <b>Know More</b>
          </Link>
           </span>
           </div>
          </div>
          </div>
       </div>
}
export default Phone;
