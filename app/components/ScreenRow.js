var React = require('react');

class ScreenRow extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <div className="screenRow">
        <span className="text">Test</span>
      </div>
    );
  }
}

module.exports = {
  ScreenRow: ScreenRow
}
