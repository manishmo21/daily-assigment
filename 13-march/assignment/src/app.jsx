import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";

function App() {
  return (
    <div>
      <h1>Welcome to User Search App</h1>
      <Main />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
