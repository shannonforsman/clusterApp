var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  getInitialState: function() {
    return {
      areaSearch: ''
    }
  },
  onAreaSearch: function(e) {
    this.setState({
      areaSearch: e.target.value
    })
  },
  render: function() {
    return (
      <div>
        <div>Hello from home!</div>
        <Link to='/climbs/new'>
          <button type='button'>Add Climb</button>
        </Link>
        <Link to='/climbs/edit'>
          <button type='button'>Edit Climb</button>
        </Link>
        <form>
          <input
            placeholder = "Search"
            value={this.state.areaSearch}
            onChange={this.onAreaSearch}
          />
        </form>

      </div>
    )
  }
});


module.exports = Home;
