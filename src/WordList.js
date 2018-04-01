import React, { Component } from 'react';

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

    removeWord(id) {
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

    genListWord() {
        const renderWord = word => (
            <div className="word" key={word.id}>
                <div className="word-container">
                    <h3 className="text-success">{word.en}</h3>
                    <h3 className="text-danger">
                        { word.isMemorized ? '-----' : word.vn }
                    </h3>
                </div>
                    <div className="btn-container">
                    <button
                        className="btn btn-success"
                        onClick={() => this.toggleWord(word.id)}
                    >
                        { word.isMemorized ? 'Forgot' : 'Memorized' }
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => this.removeWord(word.id)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        );
        return this.state.words.map(renderWord);
    }

    toggleShouldShowForm() {
        this.setState({ shouldShowForm: !this.state.shouldShowForm });
    }

    getForm() {
        if (!this.state.shouldShowForm) return (
            <button
                className="btn btn-success"
                onClick={this.toggleShouldShowForm}
            >
                Create new word
            </button>
        );
        return (
            <div className="form-group" style={{ width: '200px' }}>
                <input
                    className="form-control"
                    placeholder="English"
                    value={this.state.txtEn}
                    onChange={evt => this.setState({ txtEn: evt.target.value })}
                />
                <br />
                <input
                    className="form-control"
                    placeholder="Vietnamese"
                    value={this.state.txtVn}
                    onChange={evt => this.setState({ txtVn: evt.target.value })}
                />
                <br />
                <button className="btn btn-success" onClick={this.addWord}>
                    Add word
                </button>
                <button
                    className="btn btn-danger"
                    onClick={this.toggleShouldShowForm}
                >
                    Cancel
                </button>
            </div>
        );
    }
    render() {
        return (
            <div>
                <br />
                { this.getForm() }
                <br />
                <br />
                <select
                    className="form-control"
                    style={{ width: '200px' }}
                    value={this.state.filterMode}
                    onChange={evt => this.setState({ filterMode: evt.target.value })}
                >
                    <option value="SHOW_ALL">SHOW ALL</option>
                    <option value="SHOW_FORGOT">SHOW FORGOT</option>
                    <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
                </select>
                { this.genListWord() }
            </div>
        );
    }
}
