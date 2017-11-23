var React = require('react');
var {ScreenRow} = require('./ScreenRow');

class Screen extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="screenStyle">
        <ScreenRow display={this.props.expression}/>
        <ScreenRow display={this.props.answer}/>
      </div>
    );
  }
}

module.exports = {
  Screen: Screen
}
