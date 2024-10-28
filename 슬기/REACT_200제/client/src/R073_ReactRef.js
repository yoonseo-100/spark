import React,{Component} from "react";
import R072_onSubmit from "./R072_onSubmit";

class R073_ReactRef extends Component{
    constructor(props) {
        super(props);
        this.InputRef=React.createRef();
    }
    RefFocus =(e)=>{
        this.InputRef.current.focus();
    }
    JavascriptFocus(){
        document.getElementById('id').focus();
    }
    render(){
        return(
            <>
            <input id="id" type="text" ref={this.InputRef}/>
            <input type="button" value="Ref Focus" onClick={this.RefFocus}></input>
            <input type="button" value="Javascript Focus" onClick={this.JavascriptFocus}/>
            </>
        )
    }
}

export default R073_ReactRef;