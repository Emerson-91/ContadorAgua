import React, { Component } from 'react';
import { ImageBackground, Button, StyleSheet, Text, View } from 'react-native';

export default class ContadorAgua extends Component {
  constructor(props){
    super(props);
    this.state={consumido:0, status:'Ruim', pct:0 };

    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.limpar = this.limpar.bind(this);
  }
  atualizar(){
    let s = this.state;
    s.pct = ((s.consumido /2000)*100);

    if(s.pct >= 100){
      s.status = 'Bom';
    }else {
      s.status = 'Ruim';
    }
    this.setState(s);
  };
  addCopo(){
    let s = this.state;
    s.consumido += 200;
    this.setState(s);
    this.atualizar();
  };
  limpar(){
    this.setState({consumido:0, status:'Ruim', pct:0 });
  }
render(){
  return (
    <View style={styles.body}>
      <Text style={styles.tituloMain}> Consumo de Água</Text>
      <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>
        <View style={styles.infoarea}>
          <View style={styles.area}>
            <Text style={styles.areatitulo} >Meta</Text>
            <Text style={styles.areaDado}>2000 ml</Text>
          </View>
          <View style={styles.area}>
            <Text style={styles.areatitulo}>Consumido</Text>
            <Text style={styles.areaDado}>{this.state.consumido} ml</Text>
          </View>
          <View style={styles.area}>
            <Text style={styles.areatitulo}>Status</Text>
            <Text style={styles.areaDado}> {this.state.status}</Text>
          </View>
        </View>
        <View style={styles.pctArea}>
          <Text style={styles.pctText}>{this.state.pct}%</Text>
        </View>
        <View style={styles.btnAreaMain}>
          <View style={styles.btnArea}>
            <Button onPress={this.addCopo}title='Beber 200 ml' />
          </View>
          <View style={styles.btnArea}>
            <Button onPress={this.limpar} title='Resetar'></Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 30,
  },
  bgimage: {
    flex: 1,
    width: null,
  },
  tituloMain:{
    fontSize:40,
    fontWeight:'bold',
    color:'#45b2fc',
    backgroundColor:'transparent'
  },
  infoarea: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 70,
  },
  area: {
    flex: 1,
    alignItems: 'center',
  },
  areatitulo: {
    color: '#45b2fc'
  },
  areaDado: {
    color: '#2b4274',
    fontSize: 15,
    fontWeight: 'bold',
  },
  pctArea: {
    alignItems:'center',
    marginBottom:50,
    backgroundColor:'transparent',
  },
  pctText: {
    fontSize: 75,
    fontWeight:'bold',
    color:'white',
    backgroundColor:'transparent',

  },
  btnArea:{
    padding:20,
  },
  btnAreaMain:{
    marginBottom:180,
    flexDirection:'row',
    justifyContent:'center'
  },
});
