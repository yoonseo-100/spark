import React, {Component} from 'react';

class R019_PropsBoolean extends Component {
    render(){
        let{
            BoolenTrueFalse} = this.props
        return (
            <div style ={{padding: "0px"}}>
                {BoolenTrueFalse ? '2. ' : '1. '}
                {BoolenTrueFalse.toString()}
            </div>
            )
        }
    }

    export default R019_PropsBoolean;