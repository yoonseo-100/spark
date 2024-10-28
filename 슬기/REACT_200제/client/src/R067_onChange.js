import React, { Component } from "react";

class R067_onChange extends Component {
    change = (e) => {
        const val = e.target.value;  // 'var'을 'const'로 변경
        console.log('param: ' + val);
    }

    render() {
        return (
            <React.Fragment>
                <input type="text" onChange={this.change} />
                <select onChange={this.change}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </React.Fragment>
        );
    }
}

export default R067_onChange;
