import React from "react";
import "./NumPad.css";
import Button from "./Button";
import { AC, C } from "./Calculator";

export default class NumPad extends React.Component {
  render() {
    return (
      <div id="numpad">
        <Button
          id="button-delete"
          symbol={AC}
          onClick={this.props.handleClear}
        />
        <Button symbol={C} onClick={this.props.handleClear} />
        <Button symbol="<=" onClick={this.props.handleBackspace} />
        <Button symbol="/" onClick={this.props.handleOperator} />

        <Button symbol="7" onClick={this.props.handleDigit} />
        <Button symbol="8" onClick={this.props.handleDigit} />
        <Button symbol="9" onClick={this.props.handleDigit} />
        <Button symbol="*" onClick={this.props.handleOperator} />

        <Button symbol="4" onClick={this.props.handleDigit} />
        <Button symbol="5" onClick={this.props.handleDigit} />
        <Button symbol="6" onClick={this.props.handleDigit} />
        <Button symbol="-" onClick={this.props.handleOperator} />

        <Button symbol="1" onClick={this.props.handleDigit} />
        <Button symbol="2" onClick={this.props.handleDigit} />
        <Button symbol="3" onClick={this.props.handleDigit} />
        <Button symbol="+" onClick={this.props.handleOperator} />

        <Button symbol="%" onClick={this.props.handleOperator} />
        <Button symbol="0" onClick={this.props.handleDigit} />
        <Button symbol="." onClick={this.props.handleDecimal} />
        <Button
          id="button-result"
          symbol="="
          onClick={this.props.handleEvaluation}
        />
      </div>
    );
  }
}
