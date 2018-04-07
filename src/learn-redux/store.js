import { createStore } from 'redux';

function reducer(state = { count: 0 }, action) {
    if (action.type === 'INCREASE') return { count: state.count + 1 };
    if (action.type === 'DESCREASE') return { count: state.count - 1 };
    if (action.type === 'RESET') return { count: 0 };
    return state;
}

export const store = createStore(reducer);

console.log(store.getState());
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE' });
console.log(store.getState());
store.dispatch({ type: 'DESCREASE' });
console.log(store.getState());
store.dispatch({ type: 'RESET' });
console.log(store.getState());
