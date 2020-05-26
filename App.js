import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

//Tempo video terminado - video 3

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7"/>
      <Routes />
    </>
  );
}
