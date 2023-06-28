import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super();
        this.state = {};
        console.log('contructor child');
    }

    componentDidMount() {
        console.log('componentDidMount child');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('props', this.props);
        console.log('newprops', newProps);
        // Check người dùng bấm vào nút lấy dữ liệu cho arrProduct thì sẽ không render lại vì arrProduct không phải là props được truyền vào nên sẽ không liên quan gì với component child
        if (this.props.number != newProps.number) {
            return true;
        } else {
            return false;
        }
    }
    
    render() {
        console.log('render child');
        return (
            <div>
                <h2>Demo shouldComponentUpdate</h2>
                <p>{this.props.number}</p>
            </div>
        );
    }
}
