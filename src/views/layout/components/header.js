import React,{Component,Fragment} from 'react';
import {  Menu, } from 'antd';
import './aside.scss'
const { SubMenu } = Menu;
class Header extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <Fragment>
                 <h1 className="logo"><span>Logo</span></h1>
            </Fragment>
        )
    }
}

export default Header;