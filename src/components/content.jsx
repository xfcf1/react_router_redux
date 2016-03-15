import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Header from './header.jsx';
import Footer from './footer.jsx';

class Content extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return(
            <div>
                <Header/>
                <section className='cont'>
                    {this.props.children}
                </section>
                <Footer/>
            </div>
        );
    }
}

export default Content;