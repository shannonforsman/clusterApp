var React = require('react');
var LeafletMap = require('../utils/leaflet');

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ClimbsMap(props) {
  console.log(props)
  return props.isLoading === true
    ? <p>Loading!</p> : <LeafletMap />
      // <div>Finished: {puke(props)}</div>
};



module.exports = ClimbsMap;
