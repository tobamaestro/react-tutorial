import React from "react";
import ReactDOM from "react-dom";
import SeasonDetail from "./SeasonDetail";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" }; //  Babel transpiles to constructor init behind the scenes

  componentDidMount() {
    console.log("My component was rendered to the screen");

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }), //  This is how we update state after init - always with setState
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //  render() is called just before
  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!");
  }

  //  Helper method to avoid conditionals in render()
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDetail lat={this.state.lat} />;
    }

    return <Spinner message="Please accept the location request" />;
  }

  //  render() is mandatory to define in React
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
