/**
 * M Luthfan M
 * Createllas Test
 * 2020 March
 */

import React, { Component } from 'react';
import MainScreen from './screens/MainScreen';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return  <MainScreen {...this.props} />;  
  }
}
// console.disableYellowBox = true;

export default App;
