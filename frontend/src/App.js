import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginFormPage} />
        <Route path="/signup" component={SignupFormPage} />
      </Switch>
    </Router>
  );
}

export default App;
