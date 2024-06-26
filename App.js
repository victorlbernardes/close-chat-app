import React from 'react';
import GeneralStatusBarColor from './src/components/GeneralStatusBarColor';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'


export default function App() {
  return (
    <NavigationContainer>
      <GeneralStatusBarColor backgroundColor="#e1832cf7" barStyle={'dark-content'}/>
      <Routes/>
    </NavigationContainer>
    
  );
}
