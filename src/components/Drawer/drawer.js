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
          title="SideDrawer"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          >

          <button className='text-center btn btn-block btn-primary shadow b3'>Phone News</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Officially launched</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Upcomming mobiles</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Phone News</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Officially launched</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Upcomming mobiles</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Phone News</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Officially launched</button>
          <button className='text-center btn btn-block btn-primary shadow b3'>Upcomming mobiles</button>
        </Drawer>
      </div>
    );
  }
}

export default SideDrawer;
