var React = require('react');
var ClimbsMap = require('../components/ClimbsMap');
var githubHelpers = require('../utils/githubHelpers');

var ClimbsMapContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function() {
    // var query = this.props.location.query
    githubHelpers.getPlayersInfo(['shannonforsman'])
      .then(function(players) {
        this.setState({
          isLoading: {
            isLoading: false,
            playersInfo: players
          }
        })
      }.bind(this))
  },
  render: function() {
    return (
      <div>
      <ClimbsMap
          isLoading={this.state.isLoading}
          playersInfo={this.state.playersInfo}
        />
        {this.props.children}
      </div>
    )
  }
});



module.exports = ClimbsMapContainer;
