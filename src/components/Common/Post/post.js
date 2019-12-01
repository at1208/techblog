import React from 'react';
import Header from '../../Common/Header/header';
import { Link } from 'react-router-dom'

const Post = (prop) => {
  return <div>
     <Link to={prop.link}>
           <div className='c2 shadow card text-center container-fluid '>
            <img src={prop.imgsrc} className='card c16'/>
               <h6 className='c17'>{prop.title}</h6>

                   <span className='c20 e3'>
                 
                   <br />
                   <Link to={prop.link}>
                   <button className='c33'>READ</button>
                   </Link>
                   </span>
           </div>
       </Link>
       </div>
}
export default Post;
