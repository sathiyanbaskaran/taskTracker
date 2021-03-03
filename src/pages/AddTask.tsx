
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Login from './Login';
// import './index.css';
import { Layout, Menu, Card, Row, Col, Modal, Button } from 'antd';
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

import {
  
  PlusCircleOutlined
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

function Home(){
  var [collapsed, setCollapsed]= useState(false);
  const { SubMenu } = Menu;
  const toggle = () => {
    // collapsed
  }
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
         <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
                        <Button onClick={showModal}>
                        <span className="point" ><PlusCircleOutlined className="ant_icon_bg iconSizePos mt_5"/> Create Task</span>
                        </Button>
                        <Row>
                          <Col span={12} offset={6}>
                          <Card  className="mt_50 cardBackground cardHt">
                            <div className="mt_40">
                              <div className="userIcon">
                              <UserAddOutlined/>
                              </div>
                              <h1 className="cardBackground cardFont">Welcome To Task Tracker</h1>
                              <h4 className="cardBackground txtCntr">Create, View and Delete tasks made easy</h4>
                            </div>
                          </Card>
                          </Col>
                        </Row>

                        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

    </div>
  );
}
  

  export default Home;
