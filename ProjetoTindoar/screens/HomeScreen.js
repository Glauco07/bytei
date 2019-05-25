import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableHighlight } from 'react-native';
import { LinearGradient} from 'expo';

export default class App extends Component {

  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.container}>
        {/*Degrade do Background */}
        <LinearGradient
          colors={['#8500fc', '#440080']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>

        {/*Logo do tindoar*/}
        <View style={styles.imageTindoarContainer}>
          <Image source={require('../assets/logoMao/drawable-xhdpi/logotipo.png')} style={styles.logoMaoStyle}/>
          <Image source={require('../assets/tindoarTexto/drawable-xhdpi/tindoar.png')} style={styles.textoTindoarStyle}/>
        </View>

        {/*Botao login com Facebook*/}
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Test')}>
            <Image style={styles.botaoLoginFacebook} source={require('../assets/icons/entrarFace/drawable-xhdpi/botaoFace.png')}/>
        </TouchableHighlight>

        {/*Botao login com email*/}
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Test')}>
            <Image style={styles.botaoLoginEmail} source={require('../assets/icons/entrarEmail/drawable-xhdpi/botaoEmail.png')}/>
        </TouchableHighlight>

        {/*Texto cadastrar*/}
        <View style={styles.textoCadastroContainer}>
          <Text style={styles.textoCadastro}>Não tem uma conta?</Text>
        </View>
      
        {/*Botao cadastrar*/}
        <View style={styles.botaoCadastrese}>
          <Button title="Cadastre-se" color="transparent" type="clear" onPress={() => this.props.navigation.navigate('RegisterNome')}/>
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
  textoTindoarStyle:{
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
  textoCadastro:{
    fontSize:10,
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
