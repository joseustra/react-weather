var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            location: 'Miami',
            temp: 36
        }
    },
    handleSearch: function(location) {
        this.setState({
            location: location,
            temp: 32
        });
    },
    render: function() {
        var {temp, location} = this.state;

        return (
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage location={location} temp={temp}/>
            </div>
            
        )
    }
});

module.exports = Weather;