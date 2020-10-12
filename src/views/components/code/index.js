import { Button, message } from "antd";
import React,{Component}from "react";
import { GetCode } from "../../../api/account";
import {validate_email} from '../../../utils/validate';
let timer=null;
class Code extends Component{
    constructor(props){
        super(props)
       // 初始化props
        this.state={
            username:props.username,
            button_text:'获取验证码',
            button_loading:false,
            button_disabled:false
        }
    }


    //this.props.username每次都获取，接受父组件的props值
   //value是接收组件所有的传值，若个别，{username}
    componentWillReceiveProps(value){
        console.log(value)
        this.setState({username:value.username})
    }

    //组件销毁
    componentWillUnmount(){
        console.log('子组件销毁')
        clearInterval(timer);
    }

    //获取验证码
    getCode=()=>{
        if(!this.state.username){
            message.warning('用户名不能为空',1);
            return false;
        }

        if(!validate_email(this.state.username)){
            message.warning('用户名不能为空',1);
            return false;
        }
        this.setState({
            button_loading:true,
            button_text:'发送中'
        })
        const requestData={
            username:this.state.username,
            module:'login'
        }
        GetCode(requestData).then(res=>{

        })
        // setTimeout(()=>{
        //     this.countDown()
        // },4000)
    }


    //倒计时
    countDown=()=>{
     
        let sec=60;
        this.setState({
            button_loading:false,
            button_disabled:true,
            button_text:`${sec}S`
        })
        timer=setInterval(()=>{
            console.log('计时');
            sec--;
            if(sec<=0){
                this.setState({
                    code_button_text:'重新获取',
                    button_disabled:false,
                })
                clearInterval(timer);
                return false;
            }
            this.setState({
                code_button_text:`${sec}S`
            })
        },1000)
    }

    render(){
    return <Button type="danger" loading={this.state.button_loading} disabled={this.state.button_disabled} block onClick={this.getCode}>{this.state.button_text}</Button>
    }

}


