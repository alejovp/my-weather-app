import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const listData = cityData.city.list;
    const name = cityData.city.name;
    const temps = cityData.list.map(weatherData => weatherData.main.temp);
    const pressures = cityData.list.map(weatherData => weatherData.main.pressure);
    const humidities = cityData.list.map(weatherData => weatherData.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name}>
        <td className="maps"><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color="orange" units="C" /></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }
  
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  // return { weather: state.weather };
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);