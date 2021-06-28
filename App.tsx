/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigation from './src/Navigation';
import Context from './src/Global/Context';
const App = () => {
  return (
     <Context>
       <NavigationContainer>
      <Navigation />
    </NavigationContainer>
     </Context>
  );
};

export default App;
