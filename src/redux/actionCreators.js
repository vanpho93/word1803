export function setFilterMode(filterMode) {
    return { type: 'SET_FILTER_MODE', filterMode };
}

export function toggleShouldShowForm() {
    return { type: 'TOGGLE_SHOW_SHOW_FORM' };
}

export function removeWord(id) {
    return { type: 'REMOVE_WORD', id };
}

export function toggleWord(id) {
    return { type: 'TOGGLE_WORD', id };
}

export function addWord(en, vn) {
    const word = {
        id: Math.random() + '',
        en,
        vn,
        isMemorized: false
    };
    return { type: 'ADD_WORD', word };
}
