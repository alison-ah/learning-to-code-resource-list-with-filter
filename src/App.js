import React, { Component } from "react";
import Resource from "./Resources";
import Filters from "./Filters";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  state = { selectedFilters: [] };
  toggleFilter = (clickedFilterKey) => {
    let newFilters;
    const alreadySelected =
      this.state.selectedFilters.includes(clickedFilterKey);
    if (alreadySelected) {
      newFilters = this.state.selectedFilters.filter(
        (selectedFilter) => selectedFilter !== clickedFilterKey
      );
    } else {
      newFilters = this.state.selectedFilters.concat(clickedFilterKey);
    }
    this.setState({ selectedFilters: newFilters });
  };
  render() {
    return (
      <div className="App" role="application">
        <Header />
        <div className="content" role="main">
          <Filters
            selectedFilters={this.state.selectedFilters}
            toggleFilter={this.toggleFilter}
          />
          <h2 className="sr-only">Resources</h2>
          <Resource selectedFilters={this.state.selectedFilters} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
