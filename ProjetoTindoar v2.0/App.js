import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, { Component } from 'react';
//import { Font, Icon } from 'expo';
//import { StackNavigator } from 'react-navigation';

import HomeScreenDir from './screens/HomeScreen';
import RegisterNomeScreenDir from './screens/RegisterNomeScreen';
import RegisterEmailScreenDir from './screens/RegisterEmailScreen';
import RegisterSenhaScreenDir from './screens/RegisterSenhaScreen';
import RegisterImagemScreenDir from './screens/RegisterImagemScreen';
import RegisterTagScreenDir from './screens/RegisterTagScreen';

import LoginEmailScreenDir from './screens/LoginEmailScreen';

import PlaceholderScreenDir from './screens/PlaceholderScreen';
import TestScreenDir from './screens/TestScreen';


const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreenDir},
    RegisterNome: {screen: RegisterNomeScreenDir},
    RegisterEmail: {screen: RegisterEmailScreenDir},
    RegisterSenha: {screen: RegisterSenhaScreenDir},
    RegisterImagem: {screen: RegisterImagemScreenDir},
    RegisterTag: {screen: RegisterTagScreenDir},
    LoginEmail: {screen: LoginEmailScreenDir},
    Placeholder: {screen: PlaceholderScreenDir},
    Test: {screen: TestScreenDir},
  },
// Quando todos links de navegação estiverem prontos, descomentar este comando para remover o cabeçalho
// provisório do sistema de todas as telas.
//  {
//    headerMode: 'none'
//  },
);

console.disableYellowBox = true;

const App = createAppContainer(MainNavigator);

export default App; 