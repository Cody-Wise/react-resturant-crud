import './App.css';
import { useState, useEffect } from 'react';
import { getUser, logout } from './services/fetch-utils';
import { BrowserRouter as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';
import ListPage from './ListPage';
import UpdatePage from './UpdatePage';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = getUser();

    if (user) {
      setUser(user);
    }
  }, []);

  async function handleLogout() {
    logout();
    user('');
  }
  return (
    <Router>
      <div className="App">
        <header>
          {user ? (
            <div>
              <NavLink to="/resturants">Resturant List</NavLink>
              <NavLink to="/create">Create Resturant</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <Redirect to="/" />
          )}
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {user ? <Redirect to="/resturants" /> : <AuthPage setUser={setUser} />}
            </Route>
            <Route exact path="/resturants">
              {user ? <ListPage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/resturants/:id">
              {user ? <UpdatePage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/create">
              {user ? <CreatePage /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
