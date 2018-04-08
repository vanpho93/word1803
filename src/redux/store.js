import { createStore, combineReducers } from 'redux';

const words = [
    { id: 'ab123', en: 'One', vn: 'Mot', isMemorized: true },
    { id: 'ab124', en: 'Two', vn: 'Hai', isMemorized: false },
    { id: 'ab125', en: 'Three', vn: 'Ba', isMemorized: false },
    { id: 'ab126', en: 'Four', vn: 'Bon', isMemorized: true },
]

function wordsReducer(state = words, action) {
    if (action.type === 'REMOVE_WORD') {
        return state.filter(word => word.id !== action.id);
    }
    if (action.type === 'TOGGLE_WORD') {
        return state.map(word => {
            if (word.id !== action.id) return word;
            return { ...word, isMemorized: !word.isMemorized };
        });
    }
    if (action.type === 'ADD_WORD') {
        return [action.word, ...state]
    }
    return state;
}

function shouldShowFormReducer(state = false, action) {
    if (action.type === 'TOGGLE_SHOW_SHOW_FORM') return !state;
    if (action.type === 'ADD_WORD') return false;
    return state;
}

function filterModeReducer(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_FILTER_MODE') return action.filterMode;
    return state;
}

const reducer = combineReducers({
    words: wordsReducer,
    shouldShowForm: shouldShowFormReducer,
    filterMode: filterModeReducer
});

export const store = createStore(reducer);
