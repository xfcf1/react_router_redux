import React from 'react';
import actions from '../actions/page3';
import store from '../stores/page3';
import Item from './page3Item.jsx';

class Page3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: store.getText(),
            items: store.getAll()
        }
    }
    componentDidMount(){
        store.addChangeListener(this._onChange);
    }
    componentWillUnmount(){
        store.removeChangeListener(this._onChange);
    }
    shouldComponentUpdate(){
        console.log('我要更新了。。。');
        return true;
    }
    onChangeText = e =>{
        var value = e.target.value;
        this.setState(function(s){
            s.text = value;
            return s;
        })
        store.updateText(value);
    }
    createNewItem = () =>{
        actions.addNew(this.state.text);
    }
    _onChange = e =>{
        this.setState({
            items: store.getAll()
        })
    }
    render(){
        var items = this.state.items;
        var itemHtml = items.map(function (listItem, i) {
            return <Item key={i} index={i} listItem={listItem} />;
        });

        return(
            <div>
                <input type='text' value={this.state.text}  onChange={this.onChangeText}/>
                <button onClick={this.createNewItem}>添加</button>
                <ul>{itemHtml}</ul>
            </div>
        )
    }
}
Page3.propTypes = { text: React.PropTypes.number };
Page3.defaultProps = { text: 0 };

export default Page3;