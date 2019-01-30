import React, { Component } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import Button from './Button';
import './App.css';
import math from 'mathjs';

class App extends Component {
  state = {
    operations: []
  }

  constructor(props) {
    super(props);
    debugger;
    document.addEventListener('keydown', this.handleClick);
  }
  calculateOperation = () => {
    let result = this.state.operations.join('');
    if(result) {
      result = math.eval(result);
      result = math.format(result, {precision: 14});
      result = String(result);
      this.setState({operations: [result]});
    }
  }
  handleClick = (event) => {
    debugger;

    const app = document.querySelector('.App');
    if(!app.classList.contains('keyUp'))
    app.classList.add('keyUp');
    const value = event.key || event.target.getAttribute('data-value');
    
    if(!isNaN(value) || (value === '+' || value === '-' || value === '=' || value === 'equal' || value === '*' ||value === '/' ||value === 'clear' ||value==='c' || value === 'Enter'))
    switch(value) {
      case 'clear':
      case 'c':
        this.setState({ operations: [] });
        console.log('clear');
      break;
      case 'equal':
      case '=':
      case 'Enter':
        this.calculateOperation();
      break;
      default:
        const newOperations = [...this.state.operations];
        newOperations.push(value);
        this.setState({operations: newOperations});
        console.log('default');
    }
  }
  render() {
    return (
      <div className="App">
        <Display result={this.state.operations} />
        <Buttons>
          <Button label="C"  onClick={this.handleClick} value="clear"/>
          <Button label="7"  onClick={this.handleClick} value="7"/>
          <Button label="4"  onClick={this.handleClick} value="4"/>
          <Button label="1"  onClick={this.handleClick} value="1"/>
          <Button label="0"  onClick={this.handleClick} value="0"/>

          <Button label="/"  onClick={this.handleClick} value="/"/>
          
          <Button label="8"  onClick={this.handleClick} value="8"/>
          <Button label="5"  onClick={this.handleClick} value="5"/>
          <Button label="2"  onClick={this.handleClick} value="2"/>
          
          <Button label="."  onClick={this.handleClick} value="."/>

          <Button label="X"  onClick={this.handleClick} value="*"/>

          <Button label="9"  onClick={this.handleClick} value="9"/>
          <Button label="6"  onClick={this.handleClick} value="6"/>
          <Button label="3"  onClick={this.handleClick} value="3"/>

          <Button label=""  value="null"/>
          <Button label="-"  onClick={this.handleClick} value="-"/>
          <Button label="+"  onClick={this.handleClick} value="+" size="2"/>
          <Button label="="  onClick={this.handleClick} value="equal" size="2" />
        </Buttons>
      </div>
    );
  }
}

export default App;
