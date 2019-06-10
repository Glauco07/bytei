import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo';
import { withNavigation } from 'react-navigation';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCieOiFdopZU9JQsDNwTkAOcWy74yS-tpg",
    authDomain: "database-tindoar-teste.firebaseapp.com",
    databaseURL: "https://database-tindoar-teste.firebaseio.com",
    projectId: "database-tindoar-teste",
    storageBucket: "database-tindoar-teste.appspot.com",
    messagingSenderId: "518089935299",
    appId: "1:518089935299:web:15bffe556f2ee215"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  checkAuth = ()=>{
    var user = firebase.auth().currentUser;
      if (user) {
        firebase.database().ref('users/'+user.uid).once('value', (data)=> {
          console.log('NomeUsuario: ');
          console.log(data.toJSON("name"));
      });
      } else {
        // User is signed out.
        // ...
        console.log('User is not logged');
        this.state = {nomeCadastro: 'no'};
      }
  }
  checkAuth();

  async function logIn() {
    const { type, token, expires, permissions, declinedPermissions } = await Expo.Facebook.logInWithReadPermissionsAsync(
      "460306814532830",
      {
        permissions: ["public_profile"]
      }
    );
    if (type === "success") {
      // Handle successful authentication here
      console.log("Login facebook realizado");
      const response = await fetch(`http://graph.facebook.com/me?acces_token=${token}&fields=name`);
      const userInfo = await response.json();
      console.log(userInfo.name);
      return true;
    } else {
      // Handle errors here.
      console.log("Erro no login");
      return false;
    }
  };

export default class App extends Component {
  
  static navigationOptions = { header: null };

  constructor(App){
    super(App);
    this.state = {
      nomeFace: "NULLdoLOGIN",
    };
  }

  loginFacebook() {
    const loginSucesso = logIn();
    if(!loginSucesso){
      console.log("Erro de login no return");
    }else{
      //this.setState({ nomeFace: loginSucesso});
      //setTimeout(() => this.props.navigation.navigate('Placeholder', { paramNomeLogado: this.state.nomeFace }), 15000);
    };
  }

  render() {
    
    return (
      <View style={styles.container}>
        {/*Degrade do Background */}
        <LinearGradient
          colors={['#8500fc', '#440080']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>

          {/*Logo do tindoar*/}
          <View style={styles.imageTindoarContainer}>
            <Image source={require('../assets/logoMao/drawable-xhdpi/logotipo.png')} style={styles.logoMaoStyle} />
            <Image source={require('../assets/tindoarTexto/drawable-xhdpi/tindoar.png')} style={styles.textoTindoarStyle} />
          </View>

          {/*Botao login com Facebook*/}
          <TouchableHighlight onPress={() => this.loginFacebook()}>
            <Image style={styles.botaoLoginFacebook} source={require('../assets/icons/entrarFace/drawable-xhdpi/botaoFace.png')} />
          </TouchableHighlight>

          {/*Botao login com email*/}
          <TouchableHighlight onPress={() => this.props.navigation.navigate('LoginEmail')}>
            <Image style={styles.botaoLoginEmail} source={require('../assets/icons/entrarEmail/drawable-xhdpi/botaoEmail.png')} />
          </TouchableHighlight>                                                                                                                                                                                                                                                                                                                                         

          {/*Texto cadastrar*/}
          <View style={styles.textoCadastroContainer}>
            <Text style={styles.textoCadastro}>Não tem uma conta?</Text>
          </View>

          {/*Botao cadastrar*/}
          <View style={styles.botaoCadastrese}>
            <Button title="Cadastre-se" color="transparent" type="clear" onPress={() => this.props.navigation.navigate('RegisterNome')} />
          </View>
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
  imageTindoarContainer: {
    //    backgroundColor: 'rgba(0,0,0,1)',
    marginTop: 140,
    marginBottom: 30,
    marginLeft: -25,
    flexDirection: 'row',
  },
  logoMaoStyle: {
    //  Estilo da imagem.  
  },
  textoTindoarStyle: {
    // Estilo da imagem Tindoar.
  },
  botaoLoginEmail: {
    marginTop: 20,
  },
  botaoLoginFacebook: {
    marginTop: 15,
  },
  textoCadastroContainer: {
    //Texto de cadastro perto do botão
  },
  textoCadastro: {
    fontSize: 10,
    color: '#fff',
    marginLeft: -110,
    marginTop: 225,
  },
  botaoCadastrese: {
    //    backgroundColor: '#fff',
    fontSize: 2,
    marginTop: -25,
    marginLeft: 90,
    marginBottom: 10,
  },
});
