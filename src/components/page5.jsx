import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../containers/App'
import todoApp from '../reducers'

let store = createStore(todoApp)

export default class Page5 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}