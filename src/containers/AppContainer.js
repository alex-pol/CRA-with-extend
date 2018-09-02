import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { pipe } from 'rambda';
import { withRouter } from 'react-router-dom';
import App from '../App';

export default pipe(
  hot(module),
  withRouter,
)(App);
