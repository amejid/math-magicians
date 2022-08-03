/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import calculate from '../logic/calculate';

import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operator: null,
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.displayHandler = this.displayHandler.bind(this);
  }

  displayHandler(e) {
    const val = e.target.textContent;
    this.setState({ total: val });
  }

  clickHandler(e) {
    const val = e.target.textContent;
    const res = calculate(this.state, val);
    this.setState(res);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="result" onChange={this.displayHandler}>
          <p>
            {total}
            {operation}
            {next}
          </p>
        </div>
        <div className="row">
          <button type="button" className="btn" onClick={this.clickHandler}>
            AC
          </button>
          <button type="button" className="btn" onClick={this.clickHandler}>
            +/-
          </button>
          <button type="button" className="btn" onClick={this.clickHandler}>
            %
          </button>
          <button type="button" className="btn btn--op" onClick={this.clickHandler}>
            ÷
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn" onClick={this.clickHandler}>
            7
          </button>
          <button type="button" className="btn" onClick={this.clickHandler}>
            8
          </button>
          <button type="button" className="btn" onClick={this.clickHandler}>
            9
          </button>
          <button type="button" className="btn btn--op" onClick={this.clickHandler}>
            x
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn" onClick={this.clickHandler}>
            4
          </button>
          <button type="button" className="btn" onClick={this.clickHandler}>
            5
          </button>
          <button type="button" className="btn" onClick={this.clickHandler}>
            6
          </button>
          <button type="button" className="btn btn--op" onClick={this.clickHandler}>
            -
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn" onClick={this.clickHandler}>
            1
          </button>
          <button type="button" className="btn" onClick={this.clickHandler}>
            2
          </button>
          <button type="button" className="btn" onClick={this.clickHandler}>
            3
          </button>
          <button type="button" className="btn btn--op" onClick={this.clickHandler}>
            +
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn btn--zero" onClick={this.clickHandler}>
            0
          </button>
          <button type="button" className="btn" onClick={this.clickHandler}>
            .
          </button>
          <button type="button" className="btn btn--op" onClick={this.clickHandler}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
