import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    /*
      1. We render the SearchBar with a prop named onSearch
      2. When user submits search, we invoke this function (with <form onSubmit={this.onFormSubmit})
      3. From within, we call the Parent function (with a prop name that is passed)
      4. Handle on stuff in the Parent
    */
    this.props.onSearch(this.state.term); //  When referencing props from a class-based component, we PREFIX it with THIS
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
