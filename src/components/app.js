import React, { Component } from 'react';

// Components
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="app-title">My react + redux Weather App</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
