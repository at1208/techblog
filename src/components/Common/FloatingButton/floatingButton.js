import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from 'react-floating-button-menu';
import { Icon } from 'antd';
import MdAdd from '@material-ui/icons/Add';
import MdClose from '@material-ui/icons/Clear';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class FAB extends Component {

  state = {
    isOpen: false,
  }

  render(){
     return <FloatingMenu
       slideSpeed={500}
       direction="up"
       spacing={8}
       isOpen={this.state.isOpen}

     >
       <MainButton
         className='l2'
         iconResting={<Icon  type="deployment-unit" style={{ fontSize:25, color: "white"}} />}
         iconActive={<Icon  type="deployment-unit" style={{ fontSize: 25, color: "white" }}  />}
         onClick={() => this.setState({ isOpen: !this.state.isOpen })}
         size={56}

       />

        <ChildButton
        className='l4'
         icon={<Link to='/phones' className='l3'><Icon type="mobile" className='float-left b4'/> </Link>}
         backgroundColor="white"
         size={40}
         onClick={() => console.log('First button clicked')}
       />

       <ChildButton
              className='l4'
         icon={<Link to='/gaming-section' className='l3'><Icon type="robot" className='float-left b7'/></Link>}
         backgroundColor="white"
         size={40}
       />
       <ChildButton
              className='l4'
         icon={<Link to='/headphone-earphones' className='l3'><Icon type="customer-service" className='float-left b8'/></Link>}
         backgroundColor="white"
         size={40}
       />
       <ChildButton
              className='l4'
         icon={  <Link to='/laptops' className='l3'><Icon type="laptop" className='float-left b4'/></Link>}
         backgroundColor="white"
         size={40}
       />
       <ChildButton
              className='l4'
         icon={  <Link to='/leaks-rumors' className='l3'><Icon type="fire" className='float-left b10'/></Link>}
         backgroundColor="white"
         size={40}
       />
     </FloatingMenu>

  }
}
export default FAB;
