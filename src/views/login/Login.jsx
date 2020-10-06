

import React, { Component } from 'react'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd';
import {
    UserOutlined,
    KeyOutlined

} from '@ant-design/icons';

import {LoginIn,GetCode} from '../../api/account.js'
class Login extends Component {

    constructor() {
        super();
        this.state = {
            username:""
        }

    }

    inputChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }

    onFinish = values => {
        console.log('Success:', values);
        LoginIn().then(res=>{
            console.log(res)
        }).catch(error=>{
            console.log(error)
        })
    };
//获取验证码
    getCode=()=>{
        const data={
            username:this.state.username,
            module:"login"
        }
        GetCode(data).then(res=>{
            console.log(res)
        }).catch(error=>{
            console.log(error)
        })
    }

    toggleForm = () => {
        this.props.switchForm("regist")
        let data={
            username:'1111111@qq.com',
            password:'5454544',
            code:'11111'
        }
        LoginIn(data).then(res=>{
            console.log(res)
        }).catch(error=>{
            console.log(error)
        })
    }



    render() {
        return (
            <div>
                <h2>用户登录</h2>
                <div className="form-header">
                    <h4 className="column" onClick={this.toggleForm}>登录</h4>
                    <span onClick={this.toggleForm}>账号注册</span>
                </div>
                <div className="form-content">
                    <Form
                        name="normal_login"
                        initialValues={{ remember: true }}
                        onFinish={() => this.onFinish}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                { required: true, message: '请输入用户名!' },
                                
                            ]}
                        >
                            <Input onClick={this.inputChange.bind(this)} value={this.state.username} prefix={<UserOutlined />} placeholder="用户名" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password prefix={<KeyOutlined />} placeholder="密码" />
                        </Form.Item>

                        <Form.Item
                            label="code"
                            name="code"
                            rules={[{ required: true, message: '请输入验证码!' }]}
                        >
                            <Row gutter={20}>
                                <Col className="gutter-row" span={15}>
                                    <Input />
                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <Button type="primary" block>
                                        验证码
                                </Button>
                                </Col>

                            </Row>
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                登录
                        </Button>
                        </Form.Item>
                    </Form>

                </div>

            </div>
        );
    }
}

export default Login;

