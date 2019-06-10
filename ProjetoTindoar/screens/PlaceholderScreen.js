import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { LinearGradient} from 'expo';

export default class App extends Component {

  static navigationOptions = { header: null };

  constructor(App){
    super(App);
    this.state = {nomeCadastro: "NULLdoNOME"};
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
        <Text style={styles.textoPlaceholderStyle}>PLACEHOLDER</Text>
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
