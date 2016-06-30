var React = require('react');

var AddClimb = React.createClass({
  render: function() {
    console.log(this)

    return (
      <div>
        <h1>{this.props.route.header}</h1>
        Add a climb!
      </div>
    )
  }
});

module.exports = AddClimb;
