import React, { Component } from 'react';
import { Parent } from './Parent';
import { Provider } from 'react-redux';

import { store } from './store';

export class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Parent />
            </Provider>
        );
    }
}
