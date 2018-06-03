import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
    // Binding the context in order to use this inside callbacks
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }
  
  render() {
    return (
      <form className="input-group search-bar" onSubmit={this.onFormSubmit}>
        <input 
          type="text" 
          className="form-control col-md-8"
          placeholder="Write a City and get a 5 day forecast"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">Search</button>
        </div>
      </form>
    );
  }
}

// This give us access to the action fetchWeather through this.props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);