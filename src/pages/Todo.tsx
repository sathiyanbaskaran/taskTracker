import React, { useState } from "react";
import 'antd/dist/antd.css';
import ".././App.scss";
import { Form, Input, Button, Checkbox, Row, Col, Card, Avatar, Modal, Table, Space } from 'antd';
import { useHistory } from 'react-router-dom';

import swal from 'sweetalert';
import {
    UserOutlined,
    LockOutlined,
    CloseCircleOutlined
} from "@ant-design/icons";

var resData = []
var data: any[] = []
if(localStorage.getItem("tasks") != null){
  resData = JSON.parse(localStorage.getItem("tasks") || '{}');
  console.log("resData",resData);
}
if(resData.length > 0){
  for(var i = 0; i < resData.length;i++){
    data.push({
    'TaskID': JSON.stringify(resData[i].TaskID),
    'TaskName':resData[i].selectTaskDescription,
    'Project' : resData[i].selectProject,
    'Priority' : resData[i].selectTaskPriority,
    'Company' : resData[i].selectCompany,
    'isActive' : resData[i].isActive,
     'isStatus' : resData[i].isStatus
  })

  }
}
console.log("data====>",data);
// const data = [
//   {
//     TaskId: '1',
//     TaskName: 'John Brown',
//     Project: 'Project1',
//     Priority: 'High',
//   },
//   {
//     TaskId: '2',
//     TaskName: 'John Black',
//     Project: 'Project1',
//     Priority: 'High',
//   }
// ];


function Todo() {
    const history = useHistory();
    var auth = true;
    var condition1 = true;
    var consdition2 = true;
    var target: any;
    const [dataSource, setDataSource] = useState(data);
    const [value, setValue] = useState('');
    const { Column, ColumnGroup } = Table;

    const FilterByNameInput = (
        <Input
          placeholder="Search Name"
          value={value}
          onChange={e => {
            const currValue = e.target.value;
            setValue(currValue);
            const filteredData = data.filter(entry =>
              entry.TaskName.includes(currValue)
            );
            setDataSource(filteredData);
          }}
        />
      );
      

      const statusUpdate = (key: any, e: any) => {
       console.log(key,e)
       var arrProgress = [];
       var existingProgressArr = []
       if(localStorage.getItem("progress") != null){
        existingProgressArr = JSON.parse(localStorage.getItem("progress") || '{}');
        if(existingProgressArr.length > 0){
          for(var i = 0; i < existingProgressArr.length;i++){
            arrProgress.push(existingProgressArr);
          }
        }
        arrProgress.push(key);
       }
       localStorage.setItem("progress",JSON.stringify(arrProgress));
       e.preventDefault();
       data = data.filter(data => data.TaskID !== key.TaskID);
       console.log("progress data===>",data);
      setDataSource(data);
      }
      const columns = [
        {
          title: 'Task Id',
          dataIndex: 'TaskID',
          key: 'TaskID'
        },
        {
          title: 'Task Name',
          dataIndex: 'TaskName',
          key: 'TaskName',
        },
        {
          title: 'Project',
          dataIndex: 'Project',
          key: 'Project',
        },
     
        {
          title: 'Priority',
          dataIndex: 'Priority',
          key: 'Priority'
        },

        {
          title: 'Action',
          key: 'Action',
          render: (text: any, record: any) => (
            <Button type="primary" className="start_btn start_btn_txt start_btn_txt_pad" onClick={(e) => statusUpdate(record, e)} >Start Task</Button>
          ),
        },
        {
          title: 'Remove',
          key: 'Remove',
          render: () => (
            <Space size="middle">
              <CloseCircleOutlined className="deleteIcon point ml_10"/>
            </Space>
          ),
        },
      ];


    return (

             <div>

               <Row>
                
                 <Col span={16}>
                 <h3 className="text_decor">To Do List</h3>
                 </Col>
                 <Col span={8}>
                 <Input
          placeholder="Search By Id or Name"
          value={value}
          onChange={e => {
            const currValue = e.target.value;
            setValue(currValue);
            if(currValue.match(/\d/) ){
              const filteredData = data.filter(entry =>
                entry.TaskID.includes(currValue)
              );
              setDataSource(filteredData);
            }else{
              const filteredData = data.filter(entry =>
                entry.TaskName.includes(currValue)
              );
              setDataSource(filteredData);
            }
          }}
        />
                 </Col>

               </Row>
      <Table className="mt_10" columns={columns} dataSource={dataSource} />
             </div>
    );
}

export default Todo;
