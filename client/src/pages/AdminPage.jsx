import React, {useState} from 'react';
import './adminpage.scss';
import { Layout, Menu, Icon } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';


import { 
  DashboardIcon, 
  ClockIcon, 
  MessageIcon, 
  ProfileIcon, 
  ProjectIcon, 
  SearchIcon, 
  SettingIcon, 
  TodolistIcon,
  ArrowIcon,
  ArrowUnfoldIcon
} from '../media/icons/index';
import { ReactComponent as Logo } from '../media/logo.svg';

import { Route, Switch } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;

const AdminPage = () => {
  const [collapsed, setCollapsed] = useState(true)

  const onCollapse = () => {
    setCollapsed(!collapsed)
  };
  return(
    <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        // position: 'fixed',
        left: 0,
      }}

      collapsible 
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <Logo className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        Messages
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
        To-do list
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
        Profile
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
        Realtime tracker
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
        Projects
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
        Settings
        </Menu.Item>
        <Menu.Item key="8" icon={<ShopOutlined />}>
        Support
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
        <Switch>
          <Route path='/' component={()=> <h1>Title Dashboard</h1>}/>
          <Route exact path="/about" component={()=> <h1>Title About</h1>}/>
          <Route path='/contact' component={()=> <h1>Title Contact</h1>}/>
        </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  )
}
export default AdminPage;
