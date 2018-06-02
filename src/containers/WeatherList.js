import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const listData = cityData.city.list;
    const name = cityData.city.name;
    const temps = cityData.list.map(weatherData => weatherData.main.temp);
    const pressures = cityData.list.map(weatherData => weatherData.main.pressure);
    const humidities = cityData.list.map(weatherData => weatherData.main.humidity);
    
    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" /></td>
        <td><Chart data={pressures} color="green" /></td>
        <td><Chart data={humidities} color="blue" /></td>
      </tr>
    );
  }
  
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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