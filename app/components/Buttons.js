var React = require('react');

class Buttons extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div>
        <div>
          <button>C</button>
        </div>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>+</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>/</button>
        </div>
        <div>
          <button>0</button>
          <button>.</button>
          <button>=</button>
          <button>*</button>
        </div>
      </div>
    );
  }
}

module.exports = {
  Buttons: Buttons
}
