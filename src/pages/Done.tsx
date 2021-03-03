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
if(localStorage.getItem("done") != null){
  resData = JSON.parse(localStorage.getItem("done") || '{}');
  console.log("doneData",resData);
}
if(resData.length > 0){
  for(var i = 0; i < resData.length;i++){
    data.push({
    'TaskID': JSON.stringify(resData[i].TaskID),
    'TaskName':resData[i].selectTaskName,
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


function Done() {
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
       localStorage.setItem("done",JSON.stringify(key));
       var arrDone = [];
       var existingDoneArr = []
       if(localStorage.getItem("done") != null){
        existingDoneArr = JSON.parse(localStorage.getItem("done") || '{}');
        arrDone = existingDoneArr;
       }
       e.preventDefault();
       data = data.filter(data => data.TaskID !== key.TaskID);
       console.log("done data===>",data);
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
          title: 'Company',
          dataIndex: 'Company',
          key: 'Company'
        },
        {
          title: 'Created On',
          dataIndex: 'TaskID',
          key: 'TaskID'
        },
        {
          title: 'Completed On',
          dataIndex: 'completedDate',
          key: 'completedDate'
        },
      
      ];


    return (

             <div>

               <Row>
                
                 <Col span={16}>
                 <h3 className="text_decor">Done List</h3>
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

export default Done;
