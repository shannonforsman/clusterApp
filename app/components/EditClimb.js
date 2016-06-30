var React = require('react');

var EditClimbs = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.route.header}</h1>
        <div>Edit Climb</div>
      </div>
    )
  }
});


module.exports = EditClimb;
