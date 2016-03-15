import React from 'react';
import {RouteHandler, Link} from 'react-router';
import cookie from 'react-cookie';

class Main extends React.Component {
    constructor(props){
        super(props);
        //if(!cookie.load('username')){
        //    window.location.href = '/login';
        //}
        this.state = {}
    }
    render(){
        return(
            <div>{this.props.children}</div>
        );
    }
}

export default Main;