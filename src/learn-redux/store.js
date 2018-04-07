import { createStore } from 'redux';

function reducer(state = { count: 0 }, action) {
    if (action.type === 'INCREASE') return { count: state.count + 1 };
    if (action.type === 'DESCREASE') return { count: state.count - 1 };
    if (action.type === 'RESET') return { count: 0 };
    return state;
}

export const store = createStore(reducer);
