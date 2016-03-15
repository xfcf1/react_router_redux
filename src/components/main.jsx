import React from 'react';
import Header from './common/header.jsx';
import Footer from './common/footer.jsx';
import Aside from './common/Aside.jsx';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../reducers/reducers'
let store = createStore(reducer)

export default class Main extends React.Component{
    render(){
        return(
            <div >
                <Header/>
                <div className="container">
                    <Aside/>
                    <Provider store={store}>
                        {this.props.children}
                    </Provider>
                </div>
                <Footer/>
            </div>
        )
    }
}