var React = require('react');
var {Screen} = require('./Screen');
var {Buttons} = require('./Buttons');

class Calculator extends React.Component{
  render(){
    return(
      <div className="calc">
        <Screen />
        <Buttons />
      </div>
    );
  }
}

module.exports = {
  Calculator: Calculator
}
