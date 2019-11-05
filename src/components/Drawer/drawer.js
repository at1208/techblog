import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button, Radio } from 'antd';
import './drawer.css'
import { Icon } from 'antd';


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
          title="Here You Go"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          >

          <button className='text-center btn btn-block btn-primary shadow b3'>Phone Reviews</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>New Launches</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Upcoming Phones</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Gaming Section</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Headphones & Earphones</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Laptops</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Leaks & Rumors</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Facts & Figures</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Best Buy Links</button>
        </Drawer>
      </div>
    );
  }
}

export default SideDrawer;
