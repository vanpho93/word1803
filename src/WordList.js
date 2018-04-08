import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Word } from './Word';
import { WordFilter } from './WordFilter';
import { WordForm } from './WordForm';

class WordListComponent extends Component {
    genListWord() {
        const { filterMode, words } = this.props;
        const filteredWords = words.filter(w => {
            if (filterMode === 'SHOW_ALL') return true;
            if (filterMode === 'SHOW_MEMORIZED') return w.isMemorized;
            return !w.isMemorized;
        });
        return filteredWords.map(word => (
            <Word
                wordInfo={word}
                key={word.id}
                onRemoveWord={this.onRemoveWord}
                onToggleWord={this.onToggleWord}
            />
        ));
    }

    render() {
        return (
            <div>
                <br />
                <WordForm />
                <br />
                <br />
                <WordFilter />
                { this.genListWord() }
            </div>
        );
    }
}

const mapState = state => ({ filterMode: state.filterMode, words: state.words });

export const WordList = connect(mapState)(WordListComponent);
