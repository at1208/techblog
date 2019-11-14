import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Button, Radio } from 'antd';
import './drawer.css'
import { Icon } from 'antd';
import { Link } from 'react-router-dom'
import { AtomSpinner } from 'react-epic-spinners'


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
 <AtomSpinner color="red" onClick={this.showDrawer} className='b1' /> 
        <Drawer
          title="Geeks Content"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          >

          <div className='text-center'>

          <Link to='/phones'>
          <button className='  btn btn-block   shadow b3'><Icon type="mobile" className='float-left b4'/>Mobile</button>
          </Link>

          <Link to='/gaming-section'>
          <button className='  btn btn-block   shadow b3'><Icon type="robot" className='float-left b7'/>Gaming Section</button>
          </Link>

          <Link to='/headphone-earphones'>
          <button className='  btn btn-block   shadow b3'><Icon type="customer-service" className='float-left b8'/>Headphones</button>
          </Link>

          <Link to='/laptops'>
          <button className='  btn btn-block   shadow b3'><Icon type="laptop" className='float-left b9'/>Laptops</button>
          </Link>

          <Link to='/leaks-rumors'>
          <button className='  btn btn-block   shadow b3'><Icon type="fire" className='float-left b10'/>Leaks & Rumors</button>
          </Link>


          </div>

        </Drawer>
      </div>
    );
  }
}

export default SideDrawer;
