import React, {StrictMode} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {
  userIsAuthenticated,
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
} from './auth';
import {Header, Footer, SvgSprite} from './components';
import './static/styles/index.scss';

const HeaderWithRouter = withRouter(
  userIsAuthenticated(props => <Header {...props} />),
);

const App = () => (
  <StrictMode>
    <div className="wrapper">
      <SvgSprite />
      <HeaderWithRouter />
      <main>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/" />} />
        </Switch>
      </main>
      <Footer />
    </div>
  </StrictMode>
);

export default App;
