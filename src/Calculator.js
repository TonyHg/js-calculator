import React from 'react'
import './Calculator.css'
import Screen from './Screen'
import NumPad from './NumPad'

const MAXDIGITS = 13;
export const AC="AC", 
            C="C",
            ZERO="0",
            PLUS="+",
            MINUS="-",
            TIMES="*",
            DIVIDE="/",
            MODULO="%",
            DECIMAL=".",
            EQUAL="=";
const initState = {
    formula: "",
    currentNumber: ZERO,
    evaluating: false
}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formula: "",
            currentNumber: "0",

        };

    stopEvaluationAndReset() {
        this.handleClear(AC);
    }

    handleDigit(digit) {
        var {formula, currentNumber, evaluating} = this.state;
        if (evaluating) {
            this.stopEvaluationAndReset();

            // FIXME
            formula = initState.formula;
            currentNumber = initState.currentNumber;
        }

    
        if (currentNumber.length >= MAXDIGITS)
            return;
        
        if (currentNumber === ZERO && digit === ZERO)
            return;

        this.setState({
            formula: formula + digit,
            currentNumber: currentNumber === ZERO ? digit : currentNumber + digit,
            evaluating: false
        });
    }

    isOperator(c) {
        return c == PLUS || c == MINUS || c == TIMES || c == DIVIDE || c == MODULO;
    }

    handleOperator(operator) {
        var {formula, currentNumber, evaluating} = this.state;
        if (evaluating) {
            this.stopEvaluationAndReset();

            // FIXME
            formula = initState.formula;
            currentNumber = initState.currentNumber;
        }

        const formulaLength = formula.length;

        if (formulaLength === 0)
            formula = ZERO;

        if (this.isOperator(formula.charAt(formulaLength - 1)))
            formula = formula.slice(0, -1);

        this.setState({
            formula: formula + operator,
            currentNumber: ZERO,
            evaluating: false
        });
    }

    }

    render() {
        return (
            <div className="calculator">
                <Screen formula={this.state.formula} currentNumber={this.state.currentNumber}/>
                <NumPad />
            </div>
        );
    }
}