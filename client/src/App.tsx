import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import { UserRegistration } from "pages/UserRegistration";
import { HomePage } from "pages/HomePage";
import { loginUserId } from 'constant';

const App: React.FC = () => {
  const id = localStorage.getItem(loginUserId);

  return (
    <Router>
      {!id && 
        <Redirect to="/signup" />
      }
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/signup">
          <UserRegistration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
