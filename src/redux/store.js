import { createStore } from 'redux';

const defaultState = {
    words: [
        { id: 'ab123', en: 'One', vn: 'Mot', isMemorized: true },
        { id: 'ab124', en: 'Two', vn: 'Hai', isMemorized: false },
        { id: 'ab125', en: 'Three', vn: 'Ba', isMemorized: false },
        { id: 'ab126', en: 'Four', vn: 'Bon', isMemorized: true },
    ],
    shouldShowForm: false,
    filterMode: 'SHOW_ALL' // SHOW_FORGOT, SHOW_MEMORIZED
}

function reducer(state = defaultState, action) {
    return state;
}

export const store = createStore(reducer);
