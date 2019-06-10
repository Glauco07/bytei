import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button, TextInput, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo';
import { TagSelect } from 'react-native-tag-select';
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

export default class App extends Component {
  
  static navigationOptions = { header: null };

  constructor(App) {
    super(App);
    this.state = {
      nomeCadastro: this.props.navigation.state.params.paramNomeCadastro,
      emailCadastro: this.props.navigation.state.params.paramEmailCadastro,
      senhaCadastro: this.props.navigation.state.params.paramSenhaCadastro,
      imagemCadastro: this.props.navigation.state.params.paramImagemCadastro,
      tag: null,
    };
  }
  

  SignUp = (email, password, name, image) => {
    
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res)=> {
        firebase.database().ref('users/'+res.user.uid).set({
          nomeUser: name,
          imageUser: image,
        }).then(() => {
          console.log('Inserido com sucesso');
          setTimeout(() =>this.props.navigation.navigate('Placeholder',{paramNomeLogado: this.state.nomeCadastro},6000));
          
        }).catch((error) => {
          console.log(error);
        });
      })
      .catch(function (error) {
        console.log('Error creating new user:', error);
        alert(error);
      });
  }

  
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
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>

          {/*Logo do tindoar e botão de voltar*/}
          <View style={styles.imageBotaoContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('RegisterImagem')}>
              <Image style={styles.botaoVoltarStyle} source={require('../assets/icons/botaoVoltar/drawable-xhdpi/voltar.png')} />
            </TouchableHighlight>
            <Text style={styles.textoTindStyle}>   </Text>
            <Image source={require('../assets/logoMao/drawable-xhdpi/logotipo.png')} style={styles.imageStyle} />
            <Image source={require('../assets/tindoarTexto/drawable-xhdpi/tindoar.png')} style={styles.imageStyle} />
          </View>

          {/*Texto de cadastro*/}
          <View style={styles.textoCadastroContainer}>
            <Text style={styles.textoCadastroNome}>Quais são seus interesses?</Text>
            <View style={styles.textInputBackground}>
              <TagSelect
                data={data}
                max={6}
                itemStyle={styles.item}
                itemLabelStyle={styles.label}
                itemStyleSelected={styles.itemSelected}
                itemLabelStyleSelected={styles.labelSelected}
                ref={(tag) => { this.tag = tag; }}
              />
            </View>
          </View>
        </LinearGradient>

        {/*Progresso de Cadastro*/}
        <View style={styles.progressoCadastroContainer}>
          <Image source={require('../assets/icons/fluxoCadastro5-5/drawable-xhdpi/cadastro5-5.png')} />
        </View>

        {/*Botao de Confirmar*/}
        <View style={styles.botaoConfirmarContainer}>
          <TouchableHighlight onPress={() => {this.SignUp(this.state.emailCadastro, this.state.senhaCadastro, this.state.nomeCadastro, this.state.imagemCadastro)}}>
            <Image style={styles.botaoConfirmarStyle} source={require('../assets/icons/botaoConcluir/drawable-xhdpi/concluir.png')} />
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
  textoCadastroNome: {
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
    borderRadius: 150 / 2,
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
