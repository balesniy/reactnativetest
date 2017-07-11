import {handleActions} from 'redux-actions';
import initialState from './initialState';

export const reducer = handleActions({
  FETCH_PAGE_PENDING:   (state) => ({
    ...state,
    loading: true
  }),
  FETCH_PAGE_FULFILLED: (state, action) => ({
    ...state,
    data:        state.data.cloneWithRows(state._data.concat(action.payload)),
    _data:       state._data.concat(action.payload),
    loading:     false,
    currentPage: state.currentPage + 1
  })
}, initialState);