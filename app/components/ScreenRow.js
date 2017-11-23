var React = require('react');

class ScreenRow extends React.Component{
  constructor(props){
    super(props);
  render(){
    return(
      <div className="screenRow">
        <span className="text">{this.props.display}</span>
      </div>
    );
  }
}

module.exports = {
  ScreenRow: ScreenRow
}
