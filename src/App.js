import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';
import MovieDetails from './components/MovieDetails'
function App() {
  return (
    <Router>
    <div className="App">
      

      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/results/" component={Results}/>
          <Route path="/movieDetails/:plot" component={MovieDetails}/>
      {/* <Route path="/results" render={()=>(<Results movieResults="Hello" />)}>/> */}
      {/* <Results /> */}
      </Switch>
      
      
    </div>
    </Router>
  );
}

export default App;
