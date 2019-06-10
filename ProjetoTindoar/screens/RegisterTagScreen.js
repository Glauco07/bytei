import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { LinearGradient} from 'expo';
import { TagSelect } from 'react-native-tag-select';

export default class App extends Component {

  static navigationOptions = { header: null };

  render() {
    const data = [
      { id: 1, label: 'Roupas' },
      { id: 2, label: 'Eletrônicos' },
      { id: 3, label: 'Eletrodomésticos' },
      { id: 4, label: 'Games' },
      { id: 5, label: 'Calçados' },
      { id: 6, label: 'Móveis' },
    ];

    return (
      <View style={styles.container}>
        {/*Degrade do Background */}
        <LinearGradient
          colors={['#8500fc', '#440080']}
          style={{ padding: 15  , alignItems: 'center', borderRadius: 5 }}>

        {/*Logo do tindoar e botão de voltar*/}
        <View style={styles.imageBotaoContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('RegisterImagem')}>
            <Image style={styles.botaoVoltarStyle} source={require('../assets/icons/botaoVoltar/drawable-xhdpi/voltar.png')}/>
          </TouchableHighlight>
          <Text style={styles.textoTindStyle}>   </Text>
          <Image source={require('../assets/logoMao/drawable-xhdpi/logotipo.png')} style={styles.imageStyle}/>
          <Image source={require('../assets/tindoarTexto/drawable-xhdpi/tindoar.png')} style={styles.imageStyle}/>          
        </View>

        {/*Texto de cadastro*/}
        <View style={styles.textoCadastroContainer}>
          <Text style={styles.textoCadastroNome}>Quais são seus interesses?></Text>
          <View style={styles.textInputBackground}>
            <TagSelect
                data={data}
                max={6}
                itemStyle={styles.item}
                itemLabelStyle={styles.label}
                itemStyleSelected={styles.itemSelected}
                itemLabelStyleSelected={styles.labelSelected}
                ref={(tag) => {this.tag = tag;}}
                />
          </View>
        </View>
        </LinearGradient>

        {/*Progresso de Cadastro*/}
        <View style={styles.progressoCadastroContainer}>
          <Image source={require('../assets/icons/fluxoCadastro5-5/drawable-xxhdpi/cadastro5-5.png')}/>
        </View>

        {/*Botao de Confirmar*/}
        <View style={styles.botaoConfirmarContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Placeholder')}>
            <Image style={styles.botaoConfirmarStyle} source={require('../assets/icons/botaoConcluir/drawable-xhdpi/concluir.png')}/>
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
    marginTop: 15,
    marginLeft: 15,
    marginRight: 10,
  },
  textInputBackground: {
    backgroundColor: '#fff',
    borderRadius: 150/2,
    width: 250,
    height: 250,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  progressoCadastroContainer: {
//    backgroundColor: '#7a5',
    marginTop: 40,
    alignItems: 'center',
  },
  botaoConfirmarContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  botaoConfirmarStyle: {
// Estilo do botao para confirmar.
  },
  item: {
    borderWidth: 1,
    borderColor: '#040027',    
    backgroundColor: '#FFF',
  },
  label: {
    color: '#040027'
  },
  itemSelected: {
    backgroundColor: '#fa667b',
  },
  labelSelected: {
    color: '#FFF',
  },
});
