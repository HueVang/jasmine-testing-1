var React = require('react');
var {Screen} = require('./Screen');
var {Buttons} = require('./Buttons');
var {add, subtract, multiply, divide} = require('./math');

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.parseData = this.parseData.bind(this);
    this.state = {
      val1: '',
      operator: '',
      val2: '',
      decimal1: 0,
      decimal2: 0,
      expression: '0',
      answer: ''
    };
  }
  parseData(val) {
    var validNumbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var operators = ['+', '-', '*', '/'];

    // If conditionals that checks for valid button input based on what's currently on screen
    // val1 will go in the first if condition, val2 will go in the else
    if (this.state.operator === '') {
      if (this.state.val1 == '' && validNumbers.includes(val) || this.state.val1 == '' && val === '.') {
        this.setState({
          val1: val,
          expression: val
        });
      } else if (val == '.' && this.state.decimal1 == 0) {
        this.setState({
          val1: this.state.val1 + val,
          decimal1: this.state.decimal1 + 1,
          expression: this.state.expression + val
        });
      } else if (validNumbers.includes(val)) {
        this.setState({
          val1: this.state.val1 + val,
          expression: this.state.expression + val
        });
      } else if (operators.includes(val)) {
        this.setState({
          operator: val,
          expression: this.state.expression + ' ' + val + ' '
        });
      } else if (val == 'c') {
        this.setState({
          val1: '',
          operator: '',
          val2: '',
          decimal: 0,
          expression: '0',
          answer: ''
        });
      }
    } else {
      if (this.state.val2 == '' && validNumbers.includes(val) || this.state.val2 == '' && val === '.') {
        this.setState({
          val2: val,
          expression: this.state.expression + val
        });
      } else if (val == '.' && this.state.decimal2 == 0) {
        this.setState({
          val2: this.state.val2 + val,
          decimal2: this.state.decimal2 + 1,
          expression: this.state.expression + val
        });
      } else if (validNumbers.includes(val)) {
        this.setState({
          val2: this.state.val2 + val,
          expression: this.state.expression + val
        });
      } else if (val == 'c') {
        this.setState({
          val1: '',
          operator: '',
          val2: '',
          decimal1: 0,
          decimal2: 0,
          expression: '0',
          answer: ''
        });
      } else if (this.state.val2 != '' && this.state.val2 != '.' && val == '=') {
        switch(this.state.operator) {
          case '+':
              this.setState({
                answer: String(add(Number(this.state.val1), Number(this.state.val2)))
              });
              break;
          case '-':
              this.setState({
                answer: String(subtract(Number(this.state.val1), Number(this.state.val2)))
              });
              break;
          case '*':
              this.setState({
                answer: String(multiply(Number(this.state.val1), Number(this.state.val2)))
              });
              break;
          case '/':
              this.setState({
                answer: String(divide(Number(this.state.val1), Number(this.state.val2)))
              });
              break;
          default:
              alert('Error, no valid operator detected.');
        }
      }
    } // end if/else conditional

  };


  render(){
    return(
      <div className="calc">
        <Screen expression={this.state.expression} answer={this.state.answer}/>
        <Buttons receivedData={this.parseData} />
      </div>
    );
  }
}

module.exports = {
  Calculator: Calculator
}
