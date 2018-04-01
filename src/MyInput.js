import React, { Component } from 'react';

export class MyInput extends Component {
    render() {
        return (
            <div style={{ width: '200px' }}>
                <br />
                <input className="form-control" placeholder="English" />
                <br />
                <button className="btn btn-primary">Show Value</button>
            </div>
        );
    }
}
