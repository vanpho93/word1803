import React, { Component } from 'react';

export class Parent extends Component {
    constructor(props) {
        super(props);
        this.state  = { count: 10 };
        this.increase = this.increase.bind(this);
        this.descrease = this.descrease.bind(this);
        this.reset = this.reset.bind(this);
    }

    increase() {
        this.setState({ count: this.state.count + 1 });
    }

    descrease() {
        this.setState({ count: this.state.count - 1 });
    }

    reset() {
        this.setState({ count: 0});
    }

    render() {
        return (
            <div>
                <h3>Value = {this.state.count}</h3>
                <Child
                    increase={this.increase}
                    descrease={this.descrease}
                    reset={this.reset}
                />
            </div>
        );
    }
}

class Child extends Component {
    render() {
        const { increase, descrease, reset } = this.props;
        return (
            <div>
                <button className="btn btn-success" onClick={increase}>
                    Increase
                </button>
                <button className="btn btn-primary" onClick={descrease}>
                    Descrease
                </button>
                <button className="btn btn-danger" onClick={reset}>
                    Reset
                </button>
            </div>
        );
    }
}
