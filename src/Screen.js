import React from "react";
import "./Screen.css";

export default class Screen extends React.Component {
  render() {
    return (
      <div id="screen">
        <div id="formula">{this.props.formula}</div>
        <div id="current-number">{this.props.currentNumber}</div>
      </div>
    );
  }
}
