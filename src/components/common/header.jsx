import React from 'react';
import {Route, Link} from 'react-router';

export default class Header extends React.Component{
    render(){
        return(
            <header>
                <Link to="/">Index</Link>
                <Link to="/todo">Todo</Link>
            </header>
        )
    }
}