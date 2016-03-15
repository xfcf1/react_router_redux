import React from 'react';
import {RouteHandler, Link} from 'react-router';

class Error extends React.Component{
    render(){
        return(
            <div>
                <h1>Error</h1>
                <Link to='login'>Login</Link>
            </div>
        )
    }
}

export default Error;