var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var ClimbsMapContainer = require('../containers/ClimbsMapContainer');
var HomeContainer = require('../containers/HomeContainer');
var AddClimb = require('../components/AddClimb');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={ClimbsMapContainer}> //this should be the map
      <IndexRoute component={HomeContainer}/> //this should default to the filter options
      <Route path='/climbs' component={HomeContainer}/>
      <Route path='/climbs/new' header="Add a climb" component={AddClimb}/>
      <Route path='/climbs/edit' header="Edit a climb" component={AddClimb}/>
    </Route>
  </Router>
);
module.exports = routes;
