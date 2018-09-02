import { createActions, handleActions, combineActions } from 'redux-actions';
import {
  merge, T, F,
} from 'rambda';
import { setTokenHeader } from '../../api/config';

const HIDE_LOGIN_LOADER = 'HIDE_LOGIN_LOADER';
const SHOW_LOGIN_LOADER = 'SHOW_LOGIN_LOADER';
const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';

const actionCreators = createActions(
  {
    SHOW_LOGIN_LOADER: T,
    HIDE_LOGIN_LOADER: F,
  },
  FETCH_LOGIN_SUCCESS,
);

const {
  showLoginLoader,
  hideLoginLoader,
  fetchLoginSuccess,
} = actionCreators;

const token = localStorage.getItem('token');

export const fetchLogin = data => async (dispatch) => {
  dispatch(showLoginLoader());
  try {
    const res = {};
    const { key } = res.data;
    localStorage.setItem('token', key);
    setTokenHeader(key);
    dispatch(fetchLoginSuccess(key));
    return res;
  } catch (error) {
    dispatch(hideLoginLoader());
    throw error;
  }
};


export default handleActions({
  FETCH_LOGIN_SUCCESS(state, { payload: token }) {
    return merge(state, { isAuth: true, token });
  },
  [combineActions(SHOW_LOGIN_LOADER, HIDE_LOGIN_LOADER)](state, { payload: isLoading }) {
    return merge(state, { isLoading });
  },
}, {
  isAuth: !!token,
  isLoading: false,
});
