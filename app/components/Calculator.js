var React = require('react');
var {Screen} = require('./Screen');
var {Buttons} = require('./Buttons');

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.parseData = this.parseData.bind(this);
    this.state = {
      val1: '',
      operator: '',
      val2: '',
      expression: '0',
      answer: ''
    };
  }
  parseData(val) {
    if (this.state.val1 === '') {
      alert('Please input correct value');
    }
  };
  render(){
    return(
      <div className="calc">
        <Screen expression={this.state.expression} answer={this.state.answer}/>
        <Buttons btnData={this.parseData} />
      </div>
    );
  }
}

module.exports = {
  Calculator: Calculator
}
