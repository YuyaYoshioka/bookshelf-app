import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { UserRegistration } from "pages/UserRegistration";
import { HomePage } from "pages/HomePage";
import { Login } from "pages/Login";
import { loginUserId } from 'constant';
import { GenreCreation } from "pages/GenreCreation";
import { BookCreation } from "pages/BookCreation";

const App: React.FC = () => {
  const id = localStorage.getItem(loginUserId);

  return (
    <Router>
      {!id && 
        <Redirect to="/login" />
      }
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <UserRegistration />
        </Route>
        <Route path="/genres/new">
          <GenreCreation />
        </Route>
        <Route path="/books/new">
          <BookCreation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
