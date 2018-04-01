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
            ]
        };
    }

    removeWord(id) {
        const newWords = this.state.words.filter(w => w.id !== id);
        this.setState({ words: newWords });
    }

    render() {
        return (
            <div>
                {
                    this.state.words.map(word => (
                        <div className="word" key={word.id}>
                            <div className="word-container">
                                <h3 className="text-success">{word.en}</h3>
                                <h3 className="text-danger">
                                    { word.isMemorized ? '-----' : word.vn }
                                </h3>
                            </div>
                                <div className="btn-container">
                                <button className="btn btn-success">
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
                    ))
                }
            </div>
        );
    }
}
