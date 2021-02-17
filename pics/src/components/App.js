import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const UNSPLASH_API = "https://api.unsplash.com";

class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    const response = await axios.get(`${UNSPLASH_API}/search/photos`, {
      params: { query: term },
      headers: {
        Authorization: "Client-ID XdKpr7aaqFPrhVYj9Aq_8nA3h3deIhv3Aett39Ku9xQ",
      },
    });

    console.log(response.data.results);
    console.log(this); //  'this' is equal to props of a SearchBar component (look at line 14 in SearchBar component - the function is called there)
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          onSearch={this.onSearchSubmit}
          someotherprop="just to show this is props"
        />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
