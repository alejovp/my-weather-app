import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value })
  }
  
  render() {
    return (
      <form className="input-group">
        <input 
          type="text" 
          className="form-control"
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