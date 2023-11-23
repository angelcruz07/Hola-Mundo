import React, { Component } from "react";

const styles = {
  bubbleAlert: {
    backgroundColor: "#e9725a",
    borderRadius: "15px",
    color: "#fff",
    padding: "2px 10px",
    fontSize: "0.orem",
    width: "20px",
  },
};
class BubbleAlert extends Component {
  getNumber(n, value) {
    if (!n) {
      return "";
    }
    return n > 9 ? "9+" : n;
  }
  render() {
    const { value } = this.props;
    return <span style={styles.bubbleAlert}>{this.getNumber(value)}</span>;
  }
}

export default BubbleAlert;
