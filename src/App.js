import './App.css';
import Header from './Header';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'
import PrinterRegistration from './PrinterRegistration'

function App() {
  return (
   <Router>
    <div className="App">
    <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/Register" component={PrinterRegistration} />
      </Switch>
    </div>
   </Router> 
  );
}

export default App;
