import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Application from './src/components/Application';

export default class App extends Component<{}> {
  render() {
    return (
        <Provider>
          <Application/>
        </Provider>

    );
  }
}
