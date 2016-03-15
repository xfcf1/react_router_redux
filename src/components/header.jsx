import React from 'react';
import cookie from 'react-cookie';
import {RouteHandler, Link} from 'react-router';
import actions from '../actions/content';
import store from '../stores/content';

class Header extends React.Component{
    constructor(props){
        super(props);
        var username = cookie.load('username');
        //if(!username){
        //    window.location.hash = '/login';
        //}
        this.state = {
            username: username
        }
    }
    logout(){
        actions.logout();
    }
    render(){
        return (
            <header>
                <div className="row">
                    <div className="col-md-8">
                        <nav style={{marginBottom: '50px'}}>
                            <Link style={{marginRight: '20px'}} to="/" activeClassName="active">首页</Link>
                            <Link style={{marginRight: '20px'}} to="page2" activeClassName="active">page2</Link>
                            <Link style={{marginRight: '20px'}} to="page3" activeClassName="active">page3</Link>
                            <Link style={{marginRight: '20px'}} to="page4" activeClassName="active">page4</Link>
                            <Link style={{marginRight: '20px'}} to="page5" activeClassName="active">page5</Link>
                        </nav>
                    </div>
                    <div className="col-md-4 text-right">
                        <span>您好，夏夏夏！</span>
                        <span className="logout" onClick={this.logout}>退出</span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;