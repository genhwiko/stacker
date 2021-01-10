import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/main">Stacker</Link>
        <Link to="/account">My Account</Link>
        <Link to="/">Sign Out</Link>
      </div>
    );
  }
}

export default Nav;
