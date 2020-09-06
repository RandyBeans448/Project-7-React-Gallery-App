import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../index.css';

class SearchBar extends Component {
  
//setting the state of the search text to empty string.
    state = {
      textInput: '' 
    }
//this function changes the search text state to value sumbited in the input field
    onSearchChange = e => {
      this.setState({ textInput: e.target.value });
      
    }
    
//handleSubmit changes stops the default refresh of the page.
//It sets the value of the query from the perfromSearch function to the route. 
    handleSubmit = e => {
      e.preventDefault();
      let queryValue = this.query.value
      this.props.history.push(`/search/${queryValue}`)
      this.props.onSearch(this.query.value);
      e.currentTarget.reset()
    }



//builds out what is to display to the dom.
    render () {
      return (
        <div> 
          <h1>Photo Generator</h1>
          <form className="search-form" onSubmit={this.handleSubmit} >
              <input type="search"
                  onChange={this.onSearchChange} 
                  placeholder="Search..." 
                  ref={(input) => this.query = input}                  
                  className="search-form"/>
              <button type="submit" id="submit" onSubmit={this.handleSubmit} className="search-form button">
                  <i className="search-form button:hover"></i>
              </button>
          </form>
        </div> 
      );
    }
  } 

  export default SearchBar = withRouter(SearchBar);
