/**
 * @flow
 */

import React from 'react';

import { AppRegistry } from 'react-native';

// import Example from './src/CoverflowExample';
// import Example from './src/ListViewExample';
import Example from './src/TopBarTextExample';

const renderApp = () => <Example />;

AppRegistry.registerComponent('TabViewWeb', () => renderApp);

AppRegistry.runApplication('TabViewWeb', {
  rootTag: document.getElementById('root')
});
