

import React, { Component } from 'react'
import { Col, Row, Form, Input, Button, Checkbox } from 'antd';

class Regist extends Component {

    constructor() {
        super();
        this.state = {}

    }
    onFinish = values => {
        console.log('Success:', values);
    };
    toggleForm = () => {
        this.props.switchForm("login")
    }

    render() {
        return (
            <div>
                <h2>用户注册</h2>
                <div className="form-header">
                    <h4 className="column" onClick={this.toggleForm}>账号注册</h4>
                    <span>登录</span>
                </div>
                <div className="form-content">
                    <Form
                        name="normal_login"
                        initialValues={{ remember: true }}
                        onFinish={() => this.onFinish}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="确认密码"
                            name="passwordCF"
                            rules={[{ required: true, message: '请输入确认密码!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="验证码"
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
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                注册
                        </Button>
                        </Form.Item>
                    </Form>

                </div>

            </div>
        );
    }
}

export default Regist;

