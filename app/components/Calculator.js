var React = require('react');
var {Screen} = require('./Screen');

class Calculator extends React.Component{
  render() {
    return(
      <div className="calc">
        <Screen />
      </div>
    );
  }
}

module.exports = {
  Calculator: Calculator
}
