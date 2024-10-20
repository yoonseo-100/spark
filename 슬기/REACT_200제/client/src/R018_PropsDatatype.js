import React, { Component } from 'react';
import datatype from 'prop-types';

class R018_PropsDatatype extends Component {
    render() {
        let {
            String, Number, Boolean, Array, ObjectJson, Function
        } = this.props;
        return (
            <div style={{ padding: "0px" }}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString()}</p>
                <p>Object JsonProps: {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps: {Function ? Function() : "No Function Provided"}</p> {/* 함수가 없을 경우 메시지 출력 */}
            </div>
        );
    }
}

R018_PropsDatatype.propTypes = {
    String: datatype.string,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func,
};

R018_PropsDatatype.defaultProps = {
    Function: () => "Default Function",  // 기본 함수 정의
};

export default R018_PropsDatatype;

