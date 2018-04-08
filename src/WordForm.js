import React, { Component } from 'react';
import { connect } from 'react-redux';

class WordFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: '', txtVn: '' };
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        const { dispatch } = this.props;
        const { txtEn, txtVn } = this.state;
        const word = {
            id: Math.random() + '',
            en: txtEn,
            vn: txtVn,
            isMemorized: false
        };
        dispatch({ type: 'ADD_WORD', word });
        this.setState({ txtEn: '', txtVn: '' });
    }

    render() {
        const { shouldShowForm, dispatch } = this.props;
        if (!shouldShowForm) return (
            <button
                className="btn btn-success"
                onClick={() => dispatch({ type: 'TOGGLE_SHOW_SHOW_FORM' })}
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
                <button
                    className="btn btn-success"
                    onClick={this.addWord}
                >
                    Add word
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: 'TOGGLE_SHOW_SHOW_FORM' })}
                >
                    Cancel
                </button>
            </div>
        );
    }
}

const mapState = state => ({ shouldShowForm: state.shouldShowForm });
export const WordForm = connect(mapState)(WordFormComponent);
