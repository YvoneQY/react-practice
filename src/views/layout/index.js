import React,{Component} from 'react'
import {Layout} from 'antd'
import "./layout.scss"
import Aside from './components/aside.js'

const { Header, Footer, Sider, Content } = Layout;

class frameSection extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <Layout className="layout-wrap">
                <Sider width="250px"><Aside/></Sider>
                <Layout>
                    <Header className="layout-header">
                        
                    </Header>
                    <Content  className="layout-main">Content</Content>
                </Layout>
          </Layout>
        )
    }
}

export default frameSection