import { createStore, combineReducers } from 'redux';

const words = [
    { id: 'ab123', en: 'One', vn: 'Mot', isMemorized: true },
    { id: 'ab124', en: 'Two', vn: 'Hai', isMemorized: false },
    { id: 'ab125', en: 'Three', vn: 'Ba', isMemorized: false },
    { id: 'ab126', en: 'Four', vn: 'Bon', isMemorized: true },
]

// function reducer(state = defaultState, action) {
    //     if (action.type === 'TOGGLE_SHOW_SHOW_FORM') {
    //         return { ...state, shouldShowForm: !state.shouldShowForm };
    //     }
    //     if (action.type === 'SET_FILTER_MODE') {
    //         return { ...state, filterMode: action.filterMode };
    //     }
    //     if (action.type === 'REMOVE_WORD') {
    //         return { ...state, words: state.words.filter(word => word.id !== action.id) };
    //     }
    //     if (action.type === 'TOGGLE_WORD') {
    //         const words = state.words.map(word => {
    //             if (word.id !== action.id) return word;
    //             return { ...word, isMemorized: !word.isMemorized };
    //         });
    //         return { ...state, words };
    //     }
    //     if (action.type === 'ADD_WORD') {
    //         return {
    //             ...state,
    //             words: [action.word, ...state.words],
    //             shouldShowForm: false
    //         }
    //     }
    //     return state;
// }

function wordsReducer(state = words, action) {
    return state;
}

function shouldShowFormReducer(state = false, action) {
    return state;
}

function filterModeReducer(state = 'SHOW_ALL', action) {
    return state;
}

const reducer = combineReducers({
    words: wordsReducer,
    shouldShowForm: shouldShowFormReducer,
    filterMode: filterModeReducer
});

export const store = createStore(reducer);
