import { combineReducers } from 'redux';

import { filterModeReducer } from './filterModeReducer';
import { wordsReducer } from './wordsReducer';
import { shouldShowFormReducer } from './shouldShowFormReducer';

export const rootReducer = combineReducers({
    words: wordsReducer,
    shouldShowForm: shouldShowFormReducer,
    filterMode: filterModeReducer
});
