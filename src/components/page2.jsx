import React from 'react';
import $ from 'jquery';

var Page2 = React.createClass({
    getInitialState(){
        return {
            text: '点击变蓝'
        }
    },
    componentWillMount(){
    },
    componentDidMount(){
    },
    componentWillUnmount(){
        console.log('退出流程中心')
    },
    click(){
        if(this.state.text=='点击变蓝'){
            $('body').css('backgroundColor','#C0CFDE');
            this.setState({text:'点击变白'})
        }else{
            $('body').css('backgroundColor','#fff');
            this.setState({text:'点击变蓝'})
        }
    },
    render(){
        return(
            <div>
                <input className='btn btn-default' type='button' value={this.state.text} onClick={this.click} />
            </div>
        )
    }
})

export default Page2;