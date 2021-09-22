import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [LoggedIn, setLoggedIn] = useState("0");

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = () => {
    let value = localStorage.getItem("LoggedIn");
    if (value) {
      if (value === "1") {
        setLoggedIn("1");
        console.log(LoggedIn);
      } else {
        setLoggedIn("0");
        console.log(LoggedIn);
      }
    } else {
      localStorage.setItem("LoggedIn", "0");  
      console.log(LoggedIn);
    }
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login">
            <p className="lolxd">Lolxd</p>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
