import { useState, useEffect } from 'react';
import {  
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Translation from './components/Translation';

function App() {
  const [LoggedIn, setLoggedIn] = useState("0");

  useEffect(() => {
    let value = localStorage.getItem("LoggedIn");
    if (value) {
      if (value === "1") {
        setLoggedIn("1");
      } else {
        setLoggedIn("0");
      }
    } else {
      localStorage.setItem("LoggedIn", "0");  
    }

  }, [LoggedIn]);



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/translation" component={Translation}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
