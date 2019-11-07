import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button, Radio } from 'antd';
import './drawer.css'
import { Icon } from 'antd';
import Slide from 'react-reveal/Slide';


class SideDrawer extends Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };



  render() {
    return (
      <div  className='b2'>
          <Icon type="menu" onClick={this.showDrawer} className='b1'/>
        <Drawer
          title="Geeks Content"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          >
          <Slide left>
          <div className='text-center'>
          <button className='  btn btn-block   shadow b3'><Icon type="mobile" className='float-left b4'/>Phone Reviews</button>
          <button className='  btn btn-block   shadow b3'><Icon type="thunderbolt" className='float-left b5'/>New Launches</button>
          <button className='  btn btn-block   shadow b3'><Icon type="appstore" className='float-left b6'/>Upcoming Phones</button>
          <button className='  btn btn-block   shadow b3'><Icon type="robot" className='float-left b7'/>Gaming Section</button>
          <button className='  btn btn-block   shadow b3'><Icon type="customer-service" className='float-left b8'/>Headphones & Earphones</button>
          <button className='  btn btn-block   shadow b3'><Icon type="laptop" className='float-left b9'/>Laptops</button>
          <button className='  btn btn-block   shadow b3'><Icon type="fire" className='float-left b10'/>Leaks & Rumors</button>
          <button className='  btn btn-block   shadow b3'><Icon type="read" className='float-left b11'/>Facts & Figures</button>
          <button className='  btn btn-block   shadow b3'><Icon type="global" className='float-left b12'/>Best Buy Links</button>
          </div>
             </Slide>
        </Drawer>
      </div>
    );
  }
}

export default SideDrawer;
