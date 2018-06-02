import React, { Component } from 'react';

// Components
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div>React simple starter</div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
