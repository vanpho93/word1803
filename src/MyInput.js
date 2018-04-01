import React, { Component } from 'react';

export class MyInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: ''
        }
    }

    render() {
        return (
            <div style={{ width: '200px' }}>
                <br />
                <input
                    className="form-control"
                    placeholder="English"
                    value={this.state.value}
                    onChange={evt => this.setState({ en: evt.target.value })}  
                />
                <br />
                <button className="btn btn-primary">Show Value</button>
            </div>
        );
    }
}
