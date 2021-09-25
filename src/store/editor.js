import { createAction, handleActions} from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender'; // eslint-disable-line no-unused-vars

// action types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';

// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);

// initial state
const initialState = Map({
    title: '',
    markdown: '',
    tags: ''
});

// reducer
export default handleActions({
    [INITIALIZE]: (state, action) => initialState, // eslint-disable-line no-unused-vars
    [CHANGE_INPUT]: (state, action) => {
        const {name, value} = action.payload;
        return state.set(name, value);
    }

}, initialState);
