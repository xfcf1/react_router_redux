import React from 'react';
import {RouteHandler, Link} from 'react-router';
import TabList from './tablist.jsx';

class Page4 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
    }
    render(){
        return(
            <div>
                <TabList/>
                {this.props.children}
            </div>
        )
    }
}

export default Page4;