import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const DeltingFb = () => {
  return <div>
    <Link to='leaksrumors/Brian-Acton-still-behind-the-idea-of-deleting-Facebook'>
           <div className='c2 shadow card text-center'>
           <h6 className='c17'>Brian Acton still behind the idea of deleting Facebook</h6>

           <img src='../../img/blog7.jpg' className='card c16'/>

           <span className='c20 e3'>
          Leaks & Rumors
           <br />
           <Link to='leaksrumors/Brian-Acton-still-behind-the-idea-of-deleting-Facebook'>
          <b className='  e3'>Know More</b>
          </Link>
           </span>
           </div>
</Link>
       </div>
}
export default DeltingFb;
