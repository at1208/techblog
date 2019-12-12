import React from 'react';
import Header from '../Common/Header/header';
import { Icon } from 'antd';

const ContactUs = () => {
  return <>
       <Header />
    <h3 className='text-center c36'>Follow us ...</h3>
<div className='text-center container'>
    <a href='https://www.instagram.com/geekboy.tech/'>
  <Icon type="instagram" className='c9' />
</a>
<a href='https://www.facebook.com/GeekBoytech-102592467865382/?modal=admin_todo_tour'>
  <Icon type="facebook" className='c11'/>
</a>

<a href='https://twitter.com/GeekboyT'>
  <Icon type="twitter" className='c12'/>
</a>

  <h3 className='text-center c36'>Email us ...</h3>
  <h5 className='C37'>geekboy.techofficial@gmail.com</h5>
</div>
  </>
}
export default ContactUs;
