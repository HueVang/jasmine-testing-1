var React = require('react');

class Buttons extends React.Component{
  constructor(props){
    super(props);
    this.btnData = this.btnData.bind(this);
  }
  btnData(val) {
    this.props.btnData(val);
  }
  render(){
    return(
      <div>
        <div>
          <button onClick={(e) => this.btnData("c", e)}>C</button>
        </div>
        <div>
          <button onClick={(e) => this.btnData("7", e)}>7</button>
          <button onClick={(e) => this.btnData("8", e)}>8</button>
          <button onClick={(e) => this.btnData("9", e)}>9</button>
          <button onClick={(e) => this.btnData("+", e)}>+</button>
        </div>
        <div>
          <button onClick={(e) => this.btnData("4", e)}>4</button>
          <button onClick={(e) => this.btnData("5", e)}>5</button>
          <button onClick={(e) => this.btnData("6", e)}>6</button>
          <button onClick={(e) => this.btnData("-", e)}>-</button>
        </div>
        <div>
          <button onClick={(e) => this.btnData("1", e)}>1</button>
          <button onClick={(e) => this.btnData("2", e)}>2</button>
          <button onClick={(e) => this.btnData("3", e)}>3</button>
          <button onClick={(e) => this.btnData("/", e)}>/</button>
        </div>
        <div>
          <button onClick={(e) => this.btnData("0", e)}>0</button>
          <button onClick={(e) => this.btnData(".", e)}>.</button>
          <button onClick={(e) => this.btnData("=", e)}>=</button>
          <button onClick={(e) => this.btnData("*", e)}>*</button>
        </div>
      </div>
    );
  }
}

module.exports = {
  Buttons: Buttons
}
