var leaflet = require('leaflet');
var axios = require('axios');
var React = require('react');
var ReactRouter = require('react-router');


var divStyle = {
  height: '500px',
  width: '500px',
};

var leafletMap = React.createClass({
    componentDidMount: function() {
      console.log('test', this.props.id)
        var map = L.map('mapContainer', {
            minZoom: 2,
            maxZoom: 20,
            layers: [
                L.tileLayer(
                    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
            ],
            attributionControl: false,
        });

        console.log('map', map)


        map.on('click', this.onMapClick);
        map.fitWorld();
    },
    componentWillUnmount: function() {
        this.map.off('click', this.onMapClick);
        this.map = null;
    },
    onMapClick: function() {
        // Do some wonderful map things...
    },
    render: function() {
        return (
            <div id='mapContainer' style={divStyle}></div>
        );
    }
});




module.exports = leafletMap;
