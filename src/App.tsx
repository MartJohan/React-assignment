import {  
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Translation from './components/Translation';

function App() {


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
