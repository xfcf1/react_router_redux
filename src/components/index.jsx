import React from 'react';
import store from '../stores/index';

var Index = React.createClass({
    getInitialState(){
        return {name: store.getText()}
    },
    onChange(e){
        this.setState({name: e.target.value});
        store.setText(e.target.value);
    },
    render(){
        return(
            <div>
                <input type='text' value={this.state.name} onChange={this.onChange} />
                <h1>it works: {this.state.name}</h1>
            </div>
        )
    }
})

export default Index;