import React from 'react';
import { Link } from 'react-router';

export default class Index extends React.Component{
    render(){
        return(
            <div>这个是首页
                <div><Link to="todo">ToDo Demo</Link></div>
            </div>
        )
    }
}