import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './redux/actionCreators';

class WordFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: '', txtVn: '' };
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        const { addWord } = this.props;
        const { txtEn, txtVn } = this.state;
        addWord(txtEn, txtVn);
        this.setState({ txtEn: '', txtVn: '' });
    }

    render() {
        const { shouldShowForm, toggleShouldShowForm } = this.props;
        if (!shouldShowForm) return (
            <button
                className="btn btn-success"
                onClick={toggleShouldShowForm}
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
                    onClick={toggleShouldShowForm}
                >
                    Cancel
                </button>
            </div>
        );
    }
}

const mapState = state => ({ shouldShowForm: state.shouldShowForm });
export const WordForm = connect(mapState, actionCreators)(WordFormComponent);
