import React, { Component } from 'react';
import { Child } from './Child';

export class Parent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Value = 0</h3>
                <Child />
            </div>
        );
    }
}