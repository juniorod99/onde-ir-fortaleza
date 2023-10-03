import React from 'react';
import Home from './src/screens/Home';

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
