import React, { useState } from "react";
import 'antd/dist/antd.css';
import ".././App.scss";
import { Form, Input, Button, Checkbox, Row, Col, Card, Avatar, Modal } from 'antd';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import {
    UserOutlined,
    LockOutlined
} from "@ant-design/icons";


function Login() {
    const history = useHistory();
    var auth = true;
    var condition1 = true;
    var consdition2 = true;
    var target: any;
    const [UserName, setUserName] = useState('');
    const [PassWord, setPassWord] = useState("");



    const onClick = () => {
        console.log(UserName, PassWord);
        //   if (auth) {
        //       if (condition1 && consdition2) {
        //           history.push("/Dashboard");
        //       } else {
        //           history.push("/accessDenied");
        //       }
        //   } else {
        //       history.push("/accessDenied");
        //   }
        let requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        fetch('https://reqres.in/api/users/2').
            then(async response => await response.json()).
            then(response => {
                if (response.data.first_name == UserName || response.data.first_name == PassWord) {
                    history.push("/home");
                } else {
                    swal("Oops!", "Username or Password Incorrect!", "error");
                }

            })
    };

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };



    return (

        <div className="App app_background app_height">
            <Row>
                <Col span={6} offset={8}>
                    <Card title="Sign In" className="mt_130" style={{ width: 400 }}>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} onChange={(e) => setUserName(e.target.value)} value={UserName} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    onChange={(e) => setPassWord(e.target.value)}
                                    value={PassWord}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" onClick={onClick} htmlType="submit" className="login-form-button">
                                    Login
      </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default Login;
