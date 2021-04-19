import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../media/logo.svg';
import { ReactComponent as LogoWhite } from '../../media/logoWhite.svg';
import { Layout, Drawer, Button } from 'antd';
import './Sider.css';

import {fullpageApi} from '@fullpage/react-fullpage';

const { Sider } = Layout;


export class SiderBlock extends Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
    const elementsMenu = document.getElementsByClassName('menuH2');
            for (let i = 0; i<elementsMenu.length; i++) {
              elementsMenu[i].onclick =()=> {
    window.fullpage_api.moveTo(i+1)
    }}
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };
  render=() => {

    const { placement, visible } = this.state;


    return (
      <>
        <Sider style={{ height: '100vh' }}>
          <div style={{ textAlign: 'center' }}>
            {/* <img src={Logo} alt="MyPlanetDesign Logo" /> */}
            <Logo className="logo" />
          </div>
          <div className="rotateMenu">
            <span
              style={{
                width: '50px',
                height: '3px',
                display: 'inline-block',
                backgroundColor: 'black',
              }}></span>
            <span
              className="rotateMenu-text"
              id="menuMainText"
              style={{ display: 'inline-block', padding: '0px 20px' }}
              onClick={this.showDrawer}>
              Home
            </span>
            <span
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '50px',
                height: '3px',
                display: 'inline-block',
                backgroundColor: 'black',
                textAlign: 'center',
              }}></span>
          </div>
        </Sider>
        <Drawer
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}>
          <div className="menuFirst">
            <div>
              <LogoWhite className="logo" />
              <a href="#Home"className="menuH2 active">Home</a>
              <a href="#About" className="menuH2">About</a>
              <a href="#Services"className="menuH2">Services</a>
              <a href="#Portfolio"className="menuH2">Portfolio</a>
              <a href="#Trusted"className="menuH2">Trusted</a>
              <a href="#Team"className="menuH2">Team</a>
              <a href="#Contact" className="menuH2">Contact</a>
              <Link to='/login' className='menuH2'><span className='ml-3'>Sign In</span></Link>
            </div>
          </div>
        </Drawer>
      </>
    );
  }
}

export default SiderBlock;
