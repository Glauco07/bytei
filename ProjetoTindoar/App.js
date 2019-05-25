import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, { Component } from 'react';
//import { Font, Icon } from 'expo';
//import { StackNavigator } from 'react-navigation';

import HomeScreenDir from './screens/HomeScreen';
import RegisterNomeScreenDir from './screens/RegisterNomeScreen';
import TestScreenDir from './screens/TestScreen';

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreenDir},
    RegisterNome: {screen: RegisterNomeScreenDir},
    Test: {screen: TestScreenDir},
  },
// Quando todos links de navegação estiverem prontos, descomentar este comando para remover o cabeçalho
// provisório do sistema de todas as telas.
//  {
//    headerMode: 'none'
//  },
);

const App = createAppContainer(MainNavigator);

export default App; 