import React, { useEffect, Fragment } from 'react';
import './App.css';
import store from './store';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from './routing/Routes';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import Navbar from './component/Navbar';
import { Container, Box } from '@material-ui/core';
import Copyright from './component/Copyright';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Container>
            <Navbar />
            <Switch>
              <Route component={Routes} />
            </Switch>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </Fragment>
      </Router>
    </Provider>
  )
}
export default App;
