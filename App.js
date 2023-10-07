import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from './src/screens/Home';
import {StyleSheet} from 'react-native';

const App = () => {
  return <Home />;
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'red',
  },
  view: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default App;
