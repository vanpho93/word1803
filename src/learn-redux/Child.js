import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChildComponent extends Component {
    render() {
        const { dispatch } = this.props;
        return (
            <div>
                <button
                    className="btn btn-success"
                    onClick={() => dispatch({ type: 'INCREASE' })}
                >
                    Increase
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch({ type: 'DESCREASE' })}
                >
                    Descrease
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch({ type: 'RESET' })}
                >
                    Reset
                </button>
            </div>
        );
    }
}

export const Child = connect()(ChildComponent);
