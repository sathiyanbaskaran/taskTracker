
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Login from './Login';
// import './index.css';
import { Layout, Input, Menu, Card, Row, Col, Button, Modal, Form, Select } from 'antd';
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
const { Option } = Select;
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
function Home() {
  var [collapsed, setCollapsed] = useState(false);
  const { SubMenu } = Menu;
  const toggle = () => {
    // collapsed
  }
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectProject, setselectProject] = useState("");
  const [selectTaskPriority, setselectTaskPriority] = useState("");
  const [selectCompany, setselectselectCompany] = useState("");
  const [selectTaskName, setselectTaskName] = useState("");
  const [selectTaskDescription, setselectTaskDescription] = useState("");


  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values: any) => {
    console.log(values);
  };

  const handleCompanyChange = (value: any) => {
    setselectselectCompany(value)
    console.log(`selected ${value}`);
  }

  const handleProjectChange = (value: any) => {
    setselectProject(value)
    console.log(`selected ${value}`);
  }

  const handlePriorityChange = (value: any) => {
    setselectTaskPriority(value)
    console.log(`selected ${value}`);
  }
  const handleCreate = (value: any) => {
    var arrVarriable = [];
    var existingTasksArr = []
    if(localStorage.getItem("tasks") != null){
      existingTasksArr = JSON.parse(localStorage.getItem("tasks") || '{}');
      arrVarriable = existingTasksArr;
    }
    console.log("existingTasksArr====>",existingTasksArr,localStorage.getItem("tasks") );
    const data = {
      TaskID : Date.now(),
      selectProject : selectProject,
      selectTaskPriority : selectTaskPriority,
      selectCompany: selectCompany,
      selectTaskName: selectTaskName,
      selectTaskDescription: selectTaskDescription,
      isStatus:'Todo',
      isActive:'True'
    }
    arrVarriable.push(data)
    localStorage.setItem("tasks",JSON.stringify(arrVarriable))
  }

  return (
    <div>
      {/* <span className="point"><PlusCircleOutlined className="ant_icon_bg iconSizePos mt_5"/> Create Task</span> */}
      <span className="point" onClick={showModal}><PlusCircleOutlined className="ant_icon_bg iconSizePos mt_5" /> Create Task</span>
      <Row>
        <Col span={12} offset={6}>
          <Card className="mt_50 cardBackground cardHt">
            <div className="mt_40">
              <div className="userIcon">
                <UserAddOutlined />
              </div>
              <h1 className="cardBackground cardFont">Welcome To Task Tracker</h1>
              <h4 className="cardBackground txtCntr">Create, View and Delete tasks made easy</h4>
            </div>
          </Card>
        </Col>
      </Row>
      <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Modal title="Create Task" visible={isModalVisible}  width={600}
       footer={[
        <Button key="back" onClick={handleCancel}>
          Close
        </Button>,
        <Button key="submit" type="primary" htmlType="submit" onClick={handleCreate}>
          Create
        </Button>,
      ]}
      >
        <Row>
            <Col span={4}>


            </Col>
            <Col span={4}>

            </Col>
        </Row>

        <Row>
          <Col span={5}>
            <label>Project*</label>
            <Form.Item
              name="project"
              rules={[
                {
                  required: true,
                  message: 'Please input your Project!',
                },
              ]}
            >
              <Select className="selectWidth"     placeholder="Select Project" onChange={handleCompanyChange}>
                <Option value="Project1">Project 1</Option>
                <Option value="Project2">Project 2</Option>
                <Option value="Project3">Project 3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={14}>
            <label className="selectWidth ml_194">Company*</label>
            <Form.Item
              name="company"
              rules={[
                {
                  required: true,
                  message: 'Please input your Company!',
                },
              ]}
            >
              <Select className="selectWidth ml_194" placeholder="Select Company" onChange={handleProjectChange}>
]                <Option value="Company1">Company 1</Option>
                <Option value="Company2">Company 2</Option>
                <Option value="Company3">Company 3</Option>
              </Select>
            </Form.Item>
          </Col>
          {/* <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col> */}
        </Row>
        <Row>
          <Col span={5}>
            <label>Task Name*</label>
            <Form.Item
              name="project"
              rules={[
                {
                  required: true,
                  message: 'Please select your project!',
                },
              ]}
            >
              <Input
                type="text" className="selectWidth"
                onChange={(e) => setselectTaskName(e.target.value)}
                placeholder="Enter Task Name"
              />
            </Form.Item>
          </Col>
          <Col span={14}>
            <label className="selectWidth ml_194">Priority*</label>
            <Form.Item
              name="Priority"
              rules={[
                {
                  required: true,
                  message: 'Please input your Priority!',
                },
              ]}
            >
              <Select className="selectWidth ml_194" placeholder="Select Priority" onChange={handlePriorityChange}>
                <Option value="VeryHigh">Very High</Option>
                <Option value="High">High</Option>
                <Option value="Medium">Medium</Option>
                <Option value="Low">Low</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
        <Col span={24}>
        <label className="selectWidth">Task Description*</label>
        <Input.TextArea onChange={(e) => setselectTaskDescription(e.target.value)} className="textArea_Width"/>
</Col>
          </Row>
      </Modal>
      </Form>
    </div>
  );
}


export default Home;
