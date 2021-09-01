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
import { GenreCreationModal } from "containers/GenreCreationModal";
import { PageHeader } from 'components/PageHeader';
import { BookCreationModal } from 'containers/BookCreationModal';
import { useState } from 'react';

const App: React.FC = () => {
  const [showBookCreationModal, setShowBookCreationModal] = useState<boolean>(false);
  const [showGenreCreationModal, setShowGenreCreationModal] = useState<boolean>(false);
  const id = localStorage.getItem(loginUserId);

  return (
    <>
      <PageHeader
        showBookCreationModal={() => setShowBookCreationModal(true)}
        showGenreCreationModal={() => setShowGenreCreationModal(true)}
      />
      <BookCreationModal
        isOpen={showBookCreationModal}
        closeEditModal={() => setShowBookCreationModal(false)}
      />
      <GenreCreationModal
        isOpen={showGenreCreationModal}
        closeModal={() => setShowGenreCreationModal(false)}
      />
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
