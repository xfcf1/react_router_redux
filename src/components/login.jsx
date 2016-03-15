import React from 'react';
import store from '../stores/login';
import actions from '../actions/login';
import {RouteHandler, Link} from 'react-router';

class Login extends React.Component{
    constructor(props){
        super(props);
        var userInfo = store.getAll();
        this.state = {
            username: userInfo.username,
            password: userInfo.password
        };
    }
    login = () => {
        actions.login(this.state);
        this.props.history.pushState(null, '');
    }
    onChangeUsername = e =>{
        this.setState({username: e.target.value});
        store.updateUsername(e.target.value);
    }
    onChangePassword = e =>{
        this.setState({password: e.target.value});
    }
    render(){
        return(
            <div>
                <h1>请先登录</h1>
                <div className='form-group'>
                    <label>用户名</label>
                    <input className='form-control' value={this.state.username} ref='username' onChange={this.onChangeUsername} type='text'/>
                </div>
                <div className='form-group'>
                    <label>密码</label>
                    <input className='form-control' value={this.state.password} ref='password' onChange={this.onChangePassword} type='password'/>
                </div>
                <div>
                    <button className='btn btn-success' onClick={this.login}>登录</button>
                </div>
            </div>
        );
    }
}

export default Login;