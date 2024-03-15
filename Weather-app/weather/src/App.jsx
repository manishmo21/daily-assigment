import React from "react";
import ReactDOM from "react-dom";
import MainContent from "./main";

const App = () => {
  return (
    <div className="App">
      <MainContent />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
export default App;
