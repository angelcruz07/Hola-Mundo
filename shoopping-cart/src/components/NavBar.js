import React, { Component } from "react";
import Logo from "./Logo";
import Card from "./Card";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alingItems: "center",
    height: "100px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgb(0,0,0,0.1)",
  },
};

class NavBar extends Component {
  render() {
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Card />
      </nav>
    );
  }
}

export default NavBar;
