import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    envent.preventDefault();
    
  }
  
  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
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