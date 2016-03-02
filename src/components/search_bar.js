import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <input
        value={this.state.searchTerm}
        onChange={ event => {
          this.setState({searchTerm: event.target.value});
        }}></input>
    );
  }
}

export default SearchBar;
