import React, { Component } from 'react';
// import axios from 'axios';
import Foundation from 'react-foundation';
import SearchForm from 'components/SearchForm.js';
import FilterCategories from 'components/FilterCategories.js';
import DisplayResults from 'components/DisplayResults.js';
import Footer from 'components/Footer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "",
      city: "",
      allEvents: [],
      eventCategories: "",
      userCategory: "",
      isLoading: true,
      displayResults: false,
      categoryDropdown: "",
      error: false,
    }
  }

// user types in their country and city in form field
// if not valid type (letters only, no num), return error
// clear error once valid
// if tries to press submit with incorrect input, show error
// if correct, make API call and return categories of events listed in the search param
// user chooses category from dropdown and hits submits
// makes second api call and list all events matching



  render() {
    return (
      <div className="App">
        <SearchForm />
        <FilterCategories />
        <DisplayResults />
        <Footer />
      </div>
    );
  }
}

export default App;
