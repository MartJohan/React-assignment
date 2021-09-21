import {  
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import './App.css'
import Login from './components/Login';

function App() {


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
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
