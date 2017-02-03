//index.ios.js - place code here for ios

//import libraryto help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
//create a Component
const App = () => (
      <Header headerText={'Albums'} />
  );

//render it to the device
AppRegistry.registerComponent('albums', () => App);
