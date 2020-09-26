import React from 'react';
import './index.scss';
import Login from './Login';
import Regist from './Regist';

class LoginIn extends React.Component {
    constructor() {
        super();
        this.state = {
            formType: 'login'
        };
    }

    switchEvent = (value) => {
        console.log('++',value)
        this.setState({
            formType: value
        })
        console.log('++--',this.state.formType)
    }

    render() {
        return <div className="login">
            <div className="form-wrap">
                {this.state.formType === 'login' ? <Login switchForm={this.switchEvent}></Login> : <Regist switchForm={this.switchEvent}></Regist>}
            </div>
        </div >
    }

}

export default LoginIn;



