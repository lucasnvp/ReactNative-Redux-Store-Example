import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Application from './src/components/Application';
import rootReducer from './src/rootReducer';

let store = createStore(rootReducer);

export default class App extends Component<{}> {
  render() {
    return (
        <Provider store={store}>
          <Application/>
        </Provider>

    );
  }
}
