

import React, { Component } from 'react'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd';
import './index.scss'

class Login extends Component {

    constructor() {
        super();
        this.state = {}

    }
    onFinish = values => {
        console.log('Success:', values);
    };

    toggleForm = () => {
        this.props.switchForm("regist")
    }

    render() {
        return (
            <div>
                <h2>用户登录</h2>
                <div className="form-header">
                    <h4 className="column"  onClick={this.toggleForm}>登录</h4>
                    <span  onClick={this.toggleForm}>账号注册</span>
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
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password />
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

