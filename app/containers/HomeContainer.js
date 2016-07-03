var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Home = require('../components/Home');

var HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      areaSearch: ''
    }
  },
  handleAreaSearch: function(e) {
    this.setState({
      areaSearch: e.target.value
    })
  },
  handleClick: function() {
    console.log('click!')
    this.context.router.push({
      pathname: '/climbs/new',
      query: {
        id: '12345',
      }
    })
  },
  render: function() {
    return (
      <Home
        onButtonClick={this.handleClick}
        onAreaSearch={this.handleAreaSearch}
        areaSearch={this.state.areaSearch}
        />
    )
  }
});


module.exports = HomeContainer;
