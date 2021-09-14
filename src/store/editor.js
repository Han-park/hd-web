import { createAction, handleActions} from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
<<<<<<< HEAD

// action creators

// initial state
const initialState = Map({});

// reducer
export default handleActions({
=======
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
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
        const {name, value} = action.payload;
        return state.set(name, value);
    }
>>>>>>> 128e9fbb38f176fea98ce8d30d6baf2d3911cf1d

}, initialState);
