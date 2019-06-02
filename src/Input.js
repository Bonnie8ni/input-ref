import React, { Component, createRef } from 'react';

class Input extends Component {
    myInput = createRef();

    componentDidMount() {
        //第一種方式, React不建議使用
        // this.refs.myInput.focus();
        
        //第三種方式, 目前 React 推薦使用的方式
        this.myInput.current.focus();
    }

    //第二種方式
    setRef = (input) => {
        input.focus();
    }

    render() {
        return (
            <div>
                <h3>Enter your name</h3>
                {/* <input type="text" ref="myInput" /> */}
                {/* <input type="text" ref={this.setRef} /> */}
                <input type="text" ref={this.myInput} />
            </div>
        );
    }
}

export default Input;