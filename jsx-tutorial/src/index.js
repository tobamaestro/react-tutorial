import React from "react";
import ReactDOM from "react-dom";

// function getButtonText() {
//   return "Click me!";
// }

const App = () => {
  const buttonText = { text: "Click on me!" };
  const labelText = "Enter text:";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "1px solid red",
        }}
      >
        {buttonText.text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
