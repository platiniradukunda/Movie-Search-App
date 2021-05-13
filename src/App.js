import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
// import Results from './components/Results';

function App() {
  return (
    <Router>
    <div className="App">
      
    <Home />

      <Switch>

      {/* <Route path="/results" render={()=>(<Results movieResults="Hello" />)}>/> */}
      {/* <Results /> */}


      </Switch>
      
      
    </div>
    </Router>
  );
}

export default App;
