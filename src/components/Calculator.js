import { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

import './Calculator.css';

const Calculator = () => {
  const [data, setData] = useState({ total: 0, next: null, operation: null });

  const displayHandler = (e) => {
    const val = e.target.textContent;
    setData((prevState) => ({ ...prevState, total: val }));
  };

  const clickHandler = (val) => {
    const res = calculate(data, val);
    setData(res);
  };

  const { total, next, operation } = data;
  return (
    <div className="calculator">
      <div className="result" onChange={displayHandler}>
        <p>
          {total}
          {operation}
          {next}
        </p>
      </div>
      <div className="row">
        <Button onValueChange={clickHandler} text="AC" />
        <Button onValueChange={clickHandler} text="+/-" />
        <Button onValueChange={clickHandler} text="%" />
        <Button onValueChange={clickHandler} text="÷" extra="btn--op" />
      </div>
      <div className="row">
        <Button onValueChange={clickHandler} text="7" />
        <Button onValueChange={clickHandler} text="8" />
        <Button onValueChange={clickHandler} text="9" />
        <Button onValueChange={clickHandler} text="x" extra="btn--op" />
      </div>
      <div className="row">
        <Button onValueChange={clickHandler} text="4" />
        <Button onValueChange={clickHandler} text="5" />
        <Button onValueChange={clickHandler} text="6" />
        <Button onValueChange={clickHandler} text="-" extra="btn--op" />
      </div>
      <div className="row">
        <Button onValueChange={clickHandler} text="1" />
        <Button onValueChange={clickHandler} text="2" />
        <Button onValueChange={clickHandler} text="3" />
        <Button onValueChange={clickHandler} text="+" extra="btn--op" />
      </div>
      <div className="row">
        <Button onValueChange={clickHandler} text="0" extra="btn--zero" />
        <Button onValueChange={clickHandler} text="." />
        <Button onValueChange={clickHandler} text="=" extra="btn--op" />
      </div>
    </div>
  );
};

export default Calculator;
