import React, { useState } from "react";
import 'antd/dist/antd.css';
import "./App.scss";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Progress from './pages/Progress';
import Done from './pages/Done';


import { Layout, Menu, Form, Input, Button, Checkbox, Row, Col, Card, Avatar } from 'antd';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;



const App = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  var [collapsed, setCollapsed] = useState(false);
  const { SubMenu } = Menu;
  const toggle = () => {
    // collapsed
  }
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>

          <Route path="/" component={Login} exact />

          <Layout>
            <Sider trigger={null} collapsible >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" >
                  Home
          <Link to="/home" />
                </Menu.Item>
                <Menu.Item key="2">
                  To Do
                  <Link to="/todo" />                  
        </Menu.Item>
                <Menu.Item key="3" >
                  In Progress
                  <Link to="/progress" />                  
        </Menu.Item>
                <Menu.Item key="4" >
                <Link to="/Done"/>                  
                Done
        </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header className="headerBackground" style={{ padding: 0, paddingLeft: 16 }}>
                <Row>
                  <Col span={6}>
                  <span className="headerFont">Task Tracker</span>
                  </Col>
                </Row>
                {/* <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                style={{ cursor: 'pointer' }}
                                onClick={this.toggle}
                            /> */}
              </Header>

              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>



                <Route path="/home" component={Home} exact />

                <Route path="/todo" component={Todo} exact />
                <Route path="/progress" component={Progress} exact />
                <Route path="/Done" component={Done} exact />


              </Content>

            </Layout>

          </Layout>
        </Switch>

      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
