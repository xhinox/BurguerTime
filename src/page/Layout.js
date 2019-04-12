import React, { Component } from "react";

import Header from "../components/Header";
import Main from "../components/Main";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default Layout;
