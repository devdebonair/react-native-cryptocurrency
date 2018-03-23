import produce from 'immer';
import { handle } from 'redux-pack';
import { FETCH_COIN_DATA } from '../actions/fetchCoinData';

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null
};

const store = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_COIN_DATA:
      return handle(state, action, {
        start: prevState => {
          return Object.assign({}, prevState, { isFetching: true })
        },
        success: prevState => {
          return Object.assign({}, prevState, { isFetching: false, data: payload.data })
        },
        failure: prevState => {
          return Object.assign({}, prevState, { isFetching: false, data: action.payload, hasError: true })
        }
      });
  
    default:
      return state;
  }
}

export default store;