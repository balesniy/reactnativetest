import {createStore, applyMiddleware} from 'redux';

import promiseMiddleware from 'redux-promise-middleware';
import {reducer} from './reducer'
import initialState from './initialState'


export default createStore(reducer, initialState, applyMiddleware(promiseMiddleware()));