import React, { Component } from "react";
import { Link } from "react-router-dom"; // Link를 사용하는 경우

class R089_reactRouter extends Component {
  render() {
    return (
      <>
        <h1>path='/'</h1>
        <h3>R089_reactRouter</h3>
        <Link to="/reactRouter2">Go to reactRouter2</Link>
      </>
    );
  }
}

export default R089_reactRouter;
