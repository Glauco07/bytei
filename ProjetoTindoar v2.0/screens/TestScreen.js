import React, { Component } from 'react';
import { StyleSheet, Text, Button, Image, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends Component {

  constructor(App){
    super(App);
    this.state = {text: "NULLdoBRINDE", senha: "a"};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/icon.png')} style={styles.imageStyle}/>
        </View>

        <View style={styles.textoContainer}>
          <TextInput style={styles.textInputStyle} placeholder="Escreve aqui" onChangeText={(text) => this.setState({input: text})}/>
          {/*<Text>{'user input: ' + this.state.input}</Text>*/}
        </View>
        
        <View style={styles.outroTextoContainer}>
          <TextInput style={styles.textInputStyle} placeholder="Senha" secureTextEntry={true} onChangeText={(text) => this.setState({input: text})}/>
        </View>

        <View style={styles.tabContainer}>
          <Button title="Otro Button" onPress={() => this.props.navigation.navigate('Home')}/>
          <Text style={styles.tabStyle}>tela</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
//    alignItems: 'center',
//    justifyContent: 'center',
  },
  textInputStyle: {
    backgroundColor: 'white',
    height: 40, 
    borderColor: 'black',
    borderWidth: 2,
  },
  imageContainer: {
    backgroundColor: 'rgba(200,200,0,1)',
    paddingTop: 30,
    marginLeft: 10,
    marginRight: 270,
  },  
  imageStyle: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 3,
    marginTop: -10,
  },
  textoContainer: {
    backgroundColor: 'rgba(0,1,200,1)',
//    alignItems: 'center',
    marginTop: 200,
    marginLeft: 75,
    marginRight: 75,
//    paddingTop: 90,
  },
  textoStyle: {
    fontSize: 30,
//    marginTop: 100,
    textAlign: 'center',
  },
  outroTextoContainer: {
    backgroundColor: 'rgba(50,50,50,1)',
//    marginTop: 120,
//    paddingBottom: 110,
    marginBottom: 200,
},
  outroTextoStyle: {
    fontSize: 10,
    textAlign: 'center',
    marginLeft: 150,
  },
  tabContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
//    paddingTop: 50,
//    paddingBottom: 200,
    marginTop: 50,
    marginBottom: 500,
  },
  tabStyle: {
    fontSize: 10,
    marginTop: 10,
    paddingBottom: 100,
  },
});
