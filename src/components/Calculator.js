/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="result">
          <p>0</p>
        </div>
        <div className="row">
          <button type="button" className="btn">
            AC
          </button>
          <button type="button" className="btn">
            +/-
          </button>
          <button type="button" className="btn">
            %
          </button>
          <button type="button" className="btn btn--op">
            /
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn">
            7
          </button>
          <button type="button" className="btn">
            8
          </button>
          <button type="button" className="btn">
            9
          </button>
          <button type="button" className="btn btn--op">
            x
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn">
            4
          </button>
          <button type="button" className="btn">
            5
          </button>
          <button type="button" className="btn">
            6
          </button>
          <button type="button" className="btn btn--op">
            -
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn">
            1
          </button>
          <button type="button" className="btn">
            2
          </button>
          <button type="button" className="btn">
            3
          </button>
          <button type="button" className="btn btn--op">
            +
          </button>
        </div>
        <div className="row">
          <button type="button" className="btn btn--zero">
            0
          </button>
          <button type="button" className="btn">
            .
          </button>
          <button type="button" className="btn btn--op">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
