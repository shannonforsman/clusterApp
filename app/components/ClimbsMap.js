var React = require('react');


var ClimbsMap = React.createClass({
  render: function() {
    //map will live in main
    return (
      <div>This is the climbing map!
        {this.props.children}
      </div>
    )
  }
});

module.exports = ClimbsMap;
