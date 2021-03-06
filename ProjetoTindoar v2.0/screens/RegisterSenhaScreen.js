import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { LinearGradient} from 'expo';

export default class App extends Component {

  static navigationOptions = { header: null };

  constructor(App){
    super(App);
    this.state = {
      nomeCadastro: this.props.navigation.state.params.paramNomeCadastro,
      emailCadastro: this.props.navigation.state.params.paramEmailCadastro,
      senhaCadastro: "NULLdaSENHA",
    };
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
          <TouchableHighlight onPress={() => this.props.navigation.navigate('RegisterEmail')}>
            <Image style={styles.botaoVoltarStyle} source={require('../assets/icons/botaoVoltar/drawable-xhdpi/voltar.png')}/>
          </TouchableHighlight>
          <Text style={styles.textoTindStyle}>   </Text>
          <Image source={require('../assets/logoMao/drawable-xhdpi/logotipo.png')} style={styles.imageStyle}/>
          <Image source={require('../assets/tindoarTexto/drawable-xhdpi/tindoar.png')} style={styles.imageStyle}/>          
        </View>

        {/*Texto de cadastro*/}
        <View style={styles.textoCadastroContainer}>
          <Text style={styles.textoCadastroNome}>Crie uma senha</Text>
          <View style={styles.textInputBackground}>
            <TextInput style={styles.textInputStyle} placeholder="Senha" secureTextEntry={true} maxLength = {20} onChangeText={(senhaCadastro) => this.setState({senhaCadastro: senhaCadastro})}/>
            <Text style={styles.textoTamanhoSenha}>A senha deve conter pelo menos 8 caracteres.</Text>
          </View>

        {/* Debug para checar se o aplicativo está pegando os dados corretos
        <Text style={styles.textoCadastroNome}>{this.state.nomeCadastro}</Text>
        <Text style={styles.textoCadastroNome}>{this.state.emailCadastro}</Text>
        */}

        </View>
        </LinearGradient>

        {/*Progresso de Cadastro*/}
        <View style={styles.progressoCadastroContainer}>
          <Image source={require('../assets/icons/fluxoCadastro3-5/drawable-xhdpi/cadastro3-5.png')}/>
        </View>

        {/*Botao de Confirmar*/}
        <View style={styles.botaoConfirmarContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('RegisterImagem', {paramNomeCadastro: this.state.nomeCadastro, paramEmailCadastro: this.state.emailCadastro, paramSenhaCadastro: this.state.senhaCadastro})}>
            <Image style={styles.botaoConfirmarStyle} source={require('../assets/icons/botaoContinuar/drawable-xhdpi/continuar.png')}/>
          </TouchableHighlight>
        </View>
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
  textoCadastroContainer: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoCadastroNome:{
    fontSize: 25,
    color: '#fff',
  },
  textInputStyle: {
    justifyContent: 'center',
    color: '#000',
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 10,
  },
  textInputBackground: {
    backgroundColor: '#fff',
    borderRadius: 150/2,
    width: 250,
    height: 70,
  },
  textoTamanhoSenha: {
    fontSize: 10,
    color: '#6b6565',
    paddingTop: 7,
    paddingLeft: 20,
  },
  progressoCadastroContainer: {
//    backgroundColor: '#7a5',
    marginTop: 225,
    alignItems: 'center',
  },
  botaoConfirmarContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  botaoConfirmarStyle: {
// Estilo do botao para confirmar.
  },
});
