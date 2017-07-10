import {handleActions} from 'redux-actions';
import initialState from './initialState'

export const reducer = handleActions({
  FETCH_PAGE_PENDING: (state) => ({
    ...state,
    loading: true
  }),
  FETCH_PAGE_FULFILLED: (state, action) => ({
    ...state,
    data:    action.payload,
    loading: false,
    currentPage: state.currentPage + 1
  })
}, initialState);