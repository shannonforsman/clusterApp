var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var ClimbsMap = require('../components/ClimbsMap');
var Home = require('../components/Home');
var AddClimb = require('../components/AddClimb');

var routes = (
  <Router>
    <Route path='/' component={ClimbsMap}> //this should be the map
      <IndexRoute component={Home}/> //this should default to the filter options
      <Route path='/climbs' component={Home}/>
      <Route path='/climbs/new' header="Add a climb" component={AddClimb}/>
      <Route path='/climbs/edit' header="Edit a climb" component={AddClimb}/>

    </Route>
  </Router>
);
module.exports = routes;
