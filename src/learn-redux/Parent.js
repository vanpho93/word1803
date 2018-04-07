import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Child } from './Child';

class ParentComponent extends Component {
    render() {
        return (
            <div>
                <h3>Value = {this.props.count}</h3>
                <Child />
            </div>
        );
    }
}

const mapState = state => ({ count: state.count });

export const Parent = connect(mapState)(ParentComponent);
