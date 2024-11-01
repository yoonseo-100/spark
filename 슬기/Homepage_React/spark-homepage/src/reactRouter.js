import React, { Component } from "react";
import { Link } from "react-router-dom";

class ReactRouter extends Component {
  render() {
    return (
      <>
        <h1>path='/'</h1>
        <h3>React Router Component</h3>
        <Link to="/reactRouter2">Go to reactRouter2</Link>
      </>
    );
  }
}

export default ReactRouter;
