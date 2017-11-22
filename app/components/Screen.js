var React = require('react');
var {ScreenRow} = require('./ScreenRow');

class Screen extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className="screenStyle">
        <ScreenRow />
        <ScreenRow />
      </div>
    );
  }
}

module.exports = {
  Screen: Screen
}
