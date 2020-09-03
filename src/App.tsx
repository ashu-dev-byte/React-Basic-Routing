import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Containers/Homepage/Homepage";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./Styles/styles.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/user/" component={Sidebar}></Route>
      </div>
    </Router>
  );
}

export default App;
