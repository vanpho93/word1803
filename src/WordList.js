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

    render() {
        // this.state.words
        return (
            <div>
                <div className="word">
                    <div className="word-container">
                        <h3 className="text-success">one</h3>
                        <h3 className="text-danger">một</h3>
                    </div>
                        <div className="btn-container">
                        <button className="btn btn-success">Forgot</button>
                        <button className="btn btn-warning">Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}
