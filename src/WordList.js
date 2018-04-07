import React, { Component } from 'react';
import { Word } from './Word';
import { WordFilter } from './WordFilter';
import { WordForm } from './WordForm';

export class WordList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [
                { id: 'ab123', en: 'One', vn: 'Mot', isMemorized: true },
                { id: 'ab124', en: 'Two', vn: 'Hai', isMemorized: false },
                { id: 'ab125', en: 'Three', vn: 'Ba', isMemorized: false },
                { id: 'ab126', en: 'Four', vn: 'Bon', isMemorized: true },
            ],
            shouldShowForm: false,
            txtEn: '',
            txtVn: '',
            filterMode: 'SHOW_ALL' // SHOW_FORGOT, SHOW_MEMORIZED
        };
        this.toggleShouldShowForm = this.toggleShouldShowForm.bind(this);
        this.addWord = this.addWord.bind(this);
        this.onRemoveWord = this.onRemoveWord.bind(this);
        this.onSetFilterMode = this.onSetFilterMode.bind(this);
    }

    addWord() {
        const { txtEn, txtVn, words } = this.state;
        const id = Math.round(Math.random() * 10000) + '';
        const word = { en: txtEn, vn: txtVn, id, isMemorized: false };
        this.setState({
            words: [word, ...words],
            shouldShowForm: false,
            txtEn: '',
            txtVn: ''
        }); 
    }

    onRemoveWord(id) {
        const newWords = this.state.words.filter(w => w.id !== id);
        this.setState({ words: newWords });
    }

    toggleWord(id) {
        const newWords = this.state.words.map(w => {
            if (w.id !== id) return w;
            return { ...w, isMemorized: !w.isMemorized };
        });
        this.setState({ words: newWords });
    }

    onSetFilterMode(filterMode) {
        this.setState({ filterMode });
    }

    genListWord() {
        const { filterMode, words } = this.state;
        const filteredWords = words.filter(w => {
            if (filterMode === 'SHOW_ALL') return true;
            if (filterMode === 'SHOW_MEMORIZED') return w.isMemorized;
            return !w.isMemorized;
        });
        return filteredWords.map(word => <Word wordInfo={word} key={word.id} onRemoveWord={this.onRemoveWord} />);
    }

    toggleShouldShowForm() {
        this.setState({ shouldShowForm: !this.state.shouldShowForm });
    }

    render() {
        return (
            <div>
                <br />
                <WordForm shouldShowForm={this.state.shouldShowForm} />
                <br />
                <br />
                <WordFilter
                    filterMode={this.state.filterMode}
                    onSetFilterMode={this.onSetFilterMode}    
                />
                { this.genListWord() }
            </div>
        );
    }
}
