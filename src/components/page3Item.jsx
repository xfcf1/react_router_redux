import React from 'react';
import actions from '../actions/page3';
import store from '../stores/page3';

class Item extends React.Component{
    constructor(props){
        super(props);
    }
    removeItem = e =>{
        actions.removeItem(this.props.index);
    }
    render(){
        return(
            <li onClick={this.removeItem}>{this.props.listItem}_{this.props.index}</li>
        )
    }
}

export default Item;