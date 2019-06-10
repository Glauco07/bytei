import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { LinearGradient} from 'expo';
import firebase from 'firebase';
import { withNavigation } from 'react-navigation';

var firebaseConfig = {
    apiKey: "AIzaSyA8ZbjEF3pCZP2W3S7pI9Q9U-Koqg4NiG4",
    authDomain: "projetotindoar.firebaseapp.com",
    databaseURL: "https://projetotindoar.firebaseio.com",
    projectId: "projetotindoar",
    storageBucket: "projetotindoar.appspot.com",
    messagingSenderId: "432601744212",
    appId: "1:432601744212:web:111defc83f5e356b"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  checkAuth = ()=>{
  /*  firebase.auth().signOut().then(function() {
      console.log("foi");
    }).catch(function(error) {
      console.log("nfoi");
    });*/
    var user = firebase.auth().currentUser;
      if (user) {
        firebase.database().ref('users/'+user.uid).once('value', (data)=> {
          //console.log(data.val());
          userObj = data.val();
          console.log(userObj.nomeUser);
          //this.setState({nomeUsuario: userObj.nomeUser});
      });
      } else {
        // User is signed out.
        // ...
        console.log('User not logged');
        this.state.nomeUsuario = 'notLogged';
      }
      console.log(this.state.nomeUsuario);
  }
  
export default class App extends Component {

  static navigationOptions = { header: null };

  constructor(App){
    super(App);
    this.state = {nomeUsuario: this.props.navigation.state.params.paramNomeLogado,}
    //checkAuth();
  }

  render() {
    
    return (
      <View style={styles.container}>
        {/*Degrade do Background */}
        <LinearGradient
          colors={['#8500fc', '#440080']}
          style={{ padding: 15  , alignItems: 'center', borderRadius: 5 }}>

        {/*Logo do tindoar e botão de voltar*/}
        <View style={styles.imageBotaoContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
            <Image style={styles.botaoVoltarStyle} source={require('../assets/icons/botaoVoltar/drawable-xhdpi/voltar.png')}/>
          </TouchableHighlight>
          <Image source={require('../assets/logoMao/drawable-xhdpi/logotipo.png')} style={styles.imageStyle}/>
          <Image source={require('../assets/tindoarTexto/drawable-xhdpi/tindoar.png')} style={styles.imageStyle}/>
        </View>
        <Text style={styles.textoPlaceholderStyle}>Olá, {this.state.nomeUsuario}!</Text>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  imageBotaoContainer: {  
//    backgroundColor: '#000',
    marginTop: 20,
    marginLeft: -230,
    paddingLeft: 150,
    flexDirection: 'row',
  },  
  imageStyle: {
//  Estilo da imagem.
    justifyContent: 'center',
  },
  botaoVoltarStyle: {
// Estilo do botão voltar.
  },
  textoPlaceholderStyle:{
      fontSize: 40,
      color: '#fff',
  },
});
