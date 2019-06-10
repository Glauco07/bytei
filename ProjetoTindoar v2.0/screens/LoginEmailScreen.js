import React, { Component } from 'react';
import { StyleSheet, Text, Image, TextInput, View, Button, TouchableHighlight } from 'react-native';
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

export default class App extends Component {

  static navigationOptions = { header: null };

  constructor(App){
    super(App);
    this.state = {
      emailLogin: "NULLdoNOME",
      senhaLogin: "NULLdaSENHA",
      nomeLogado: "NULLdoLOGIN",
    };
  }

  logIn = (email, password) => {
    
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
          console.log('Logado com sucesso');
          var user = firebase.auth().currentUser;
           if (user) {
            firebase.database().ref('users/'+user.uid).once('value', (data)=> {
            //console.log(data.val());
            userObj = data.val();
            console.log(userObj.nomeUser);
            this.setState({nomeLogado: userObj.nomeUser});
          });
        }
          setTimeout(() => this.props.navigation.navigate('Placeholder',{paramNomeLogado: this.state.nomeLogado}),6000);
          //this.props.navigation.navigate('Placeholder', {paramNomeLogado: this.state.nomeLogado});
        }).catch((error) => {
          console.log(error);
          alert(error);
        });
  }

  render() {
    return (
      <View style={styles.container}>
        {/*Degrade do Background */}
        <LinearGradient
          colors={['#8500fc', '#440080']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>

        {/*Logo do tindoar e botão de voltar*/}
        <View style={styles.imageBotaoContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Image style={styles.botaoVoltarStyle} source={require('../assets/icons/botaoVoltar/drawable-xhdpi/voltar.png')}/>
          </TouchableHighlight>
          <Text style={styles.textoTindStyle}>   </Text>
          <Image source={require('../assets/logoMao/drawable-xhdpi/logotipo.png')} style={styles.imageStyle}/>
          <Image source={require('../assets/tindoarTexto/drawable-xhdpi/tindoar.png')} style={styles.imageStyle}/>          
        </View>

        {/*Texto Login*/}
        <Text style={styles.textoLogin}>Login</Text>
        {/*Email e senha*/}
        <View style={styles.styleLogin}>
            <TextInput style={styles.textInputStyle} placeholder="E-mail" maxLength = {40} onChangeText={(emailLogin) => this.setState({emailLogin: emailLogin})}/>
        </View>
        <View style={styles.styleLogin}>
            <TextInput style={styles.textInputStyle} placeholder="Senha" secureTextEntry={true} maxLength = {20} onChangeText={(senhaLogin) => this.setState({senhaLogin: senhaLogin})}/>       
        </View>

        {/*Botao esqueceu a senha*/}
        <TouchableHighlight onPress={() => alert('Não implementado!')}>
          <Text style={styles.textoEsqueceuSenha}>Esqueceu sua senha?</Text>
        </TouchableHighlight>

        {/*Botao de entrar*/}
        <TouchableHighlight onPress={() => this.logIn(this.state.emailLogin, this.state.senhaLogin)}>
            <Image style={styles.botaoLoginStyle} source={require('../assets/icons/botaoLogin/drawable-xhdpi/login.png')}/>
        </TouchableHighlight>

        {/*Botao para cadastrar*/}
        <View style={styles.viewCadastrese}>
            <Text style={styles.textoConta}>Não tem uma conta?</Text>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('RegisterNomeScreen')}>
                <Text style={styles.textoCadastrese}>Cadastre-se</Text>
            </TouchableHighlight>
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
// Estilo do botão voltar
        marginLeft: 10,
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
  textoLogin:{
    fontSize: 20,
    color: '#fff',
    marginTop: 100,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textInputStyle: {
    color: '#fff',
//    backgroundColor: '#000',
    marginTop: 15,
    fontSize: 20,
//    width: 300,
    marginRight: -230,
    textAlign: 'left',
//    marginTop: 15,
//   marginLeft: 15,
//    marginRight: 10,
  },
  styleLogin: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingRight: 230,
 //   height: 50,
  },
  textoEsqueceuSenha: {
      marginTop: 17 ,
      color: '#fff',
      fontSize: 15,
      textDecorationLine: 'underline',
  },
  botaoLoginStyle: {
//  Estilo do botão de login
    marginTop: 20,
  },
  textoConta: {
      marginTop: 180,
      color: '#fff',
      fontSize: 15,
  },
  textoCadastrese: {
      marginTop: 180,
      paddingLeft: 3,
      color: '#fff',
      fontSize: 15,
      textDecorationLine: 'underline',
  },
  viewCadastrese: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
