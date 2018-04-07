import React, { Component } from 'react';

export class WordForm extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEn: '', txtVn: '' };
    }
    render() {
        const { shouldShowForm } = this.props;
        if (!shouldShowForm) return (
            <button
                className="btn btn-success"
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
                <button className="btn btn-success">
                    Add word
                </button>
                <button
                    className="btn btn-danger"
                >
                    Cancel
                </button>
            </div>
        );
    }
}
