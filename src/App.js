import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppNavbar from './components/AppNavbar';
import Home from './components/views/Home';
import About from './components/views/About';
import company from './components/views/company.js';

import users from './components/views/users.js';
import newUsers from './components/views/newUsers.js';
//import { AcceptWager } from "./components/participants/userViews";

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/company" component={company} />
          <Route path="/users" component={users} />
          <Route path="/new-users" component={newUsers} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

