import React from 'react';
import {RouteHandler, Link} from 'react-router';

class TabList extends React.Component{
    render(){
        return(
            <ul>
                <li><Link to='cont1'>目录一</Link></li>
                <li><Link to='cont1'>目录二</Link></li>
                <li><Link to='cont1'>目录三</Link></li>
                <li><Link to='cont1'>目录四</Link></li>
                <li><Link to='cont1'>目录五</Link></li>
            </ul>
        )
    }
}

export default TabList;