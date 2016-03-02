import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input
        value={this.props.term}
        onChange={ (event) => this.props.onInput(event.target.value) }></input>
    );
  }
}

export default SearchBar;
